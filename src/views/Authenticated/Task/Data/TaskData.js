import React, { useState } from 'react';
import { useIntl } from 'react-intl';
import { useParams } from 'react-router';
import { Area, AreaChart, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import Container from '../../../../components/Container/Container';
import api from '../../../../api';
import useInstanceWithToastsAndLoading from '../../../../hooks/api/useInstanceWithToastsAndLoading';
import TaskPanelTemplate from '../TaskPanelTemplate';
import routes from '../../../../routes';
import useCancellableEffect from '../../../../hooks/useCancellableEffect';
import LoadingOrChildren from '../../../../components/loading/LoadingOrChildren/LoadingOrChildren';
import TaskTooltip from './TaskTooltip/TaskTooltip';
import CardData from './CardData/CardData';
import styles from './TaskData.module.scss';
import CoefficientOfVariation from './CoefficientOfVariation/CoefficientOfVariation';
import AccentTitle from '../../../../components/typography/AccentTitle/AccentTitle';
import Empty from '../../../../components/typography/Empty/Empty';
import useStatisticsPreference from '../../../../hooks/useStatisticsPreference';
import TimeWithStatisticPreference from './TimeWithStatisticPreference/TimeWithStatisticPreference';

const TaskData = () => {
    const [data, setData] = useState({});

    const { statisticsPreference } = useStatisticsPreference();

    const { taskId } = useParams();

    const [instance, loading, cancel] = useInstanceWithToastsAndLoading({
        redirectPath: routes.task.index,
    });

    const { formatDate, formatMessage } = useIntl();

    useCancellableEffect(
        () => {
            instance.get(api.task.data(taskId)).then(response => {
                const attempts = response.data.attempts.map(item => {
                    item.shortDate = formatDate(item.created_at, {
                        day: 'numeric',
                        month: 'numeric',
                    });

                    return item;
                });
                const timeStatistics = response.data.time_statistics_full;
                setData({
                    timeStatistics,
                    attempts,
                });
            });
        },
        [],
        cancel,
    );

    const length = data.attempts?.length;

    return (
        <TaskPanelTemplate>
            <LoadingOrChildren loading={loading}>
                {length < 2 ? (
                    <Empty messageId="data.tooLessAttempts" />
                ) : (
                    <>
                        {statisticsPreference.chart && (
                            <ResponsiveContainer height={400} className={styles.chartContainer}>
                                <AreaChart
                                    data={data.attempts}
                                    margin={{
                                        left: 20,
                                    }}
                                >
                                    <XAxis dataKey="shortDate" />
                                    <YAxis domain={['dataMin', 'dataMax']} unit="s" />
                                    <Tooltip content={<TaskTooltip data={data} />} />
                                    <Area type="monotone" stroke={null} dataKey="relative_time" />
                                    {statisticsPreference.showAverageLine && (
                                        <ReferenceLine
                                            y={data.timeStatistics?.avg}
                                            label={formatMessage({ id: 'data.average' })}
                                        />
                                    )}
                                </AreaChart>
                            </ResponsiveContainer>
                        )}
                        <AccentTitle messageId="data.values" />
                        <Container variant={['smallItems']} className={styles.dataContainer}>
                            <CardData titleId="fastest">
                                <TimeWithStatisticPreference time={data.timeStatistics?.min} />
                            </CardData>
                            <CardData titleId="slowest">
                                <TimeWithStatisticPreference time={data.timeStatistics?.max} />
                            </CardData>
                            {statisticsPreference.full && (
                                <CardData titleId="range" descriptionId="data.description.range">
                                    <TimeWithStatisticPreference time={data.timeStatistics?.range} />
                                </CardData>
                            )}
                            <CardData titleId="attemptsCount" descriptionId="data.description.amount">
                                {length ?? 0}
                            </CardData>
                        </Container>
                        <AccentTitle messageId="data.average" />
                        <Container variant={['smallItems']} className={styles.dataContainer}>
                            <CardData titleId="average" descriptionId="data.description.average">
                                <TimeWithStatisticPreference time={data.timeStatistics?.avg} />
                            </CardData>
                            {statisticsPreference.full && (
                                <CardData
                                    titleId="standardDeviation"
                                    descriptionId="data.description.standardDeviation"
                                >
                                    <TimeWithStatisticPreference time={data.timeStatistics?.standardDeviation} />
                                </CardData>
                            )}
                            <CardData
                                titleId="coefficientOfVariation"
                                descriptionId="data.description.coefficientOfVariation"
                            >
                                <CoefficientOfVariation value={data.timeStatistics?.coefficientOfVariation} />
                            </CardData>
                        </Container>
                        {length > 3 && statisticsPreference.full && (
                            <>
                                <AccentTitle messageId="data.quartiles" />
                                {(data.timeStatistics?.quartiles.q1 ?? null) !== null && (
                                    <Container variant={['smallItems']} className={styles.dataContainer}>
                                        <CardData
                                            titleId="quartile.lower"
                                            descriptionId="data.description.quartile.lower"
                                        >
                                            <TimeWithStatisticPreference time={data.timeStatistics.quartiles.q1} />
                                        </CardData>
                                        <CardData titleId="median" descriptionId="data.description.median">
                                            <TimeWithStatisticPreference time={data.timeStatistics.quartiles.q2} />
                                        </CardData>
                                        <CardData
                                            titleId="quartile.upper"
                                            descriptionId="data.description.quartile.upper"
                                        >
                                            <TimeWithStatisticPreference time={data.timeStatistics.quartiles.q3} />
                                        </CardData>
                                    </Container>
                                )}
                            </>
                        )}
                    </>
                )}
            </LoadingOrChildren>
        </TaskPanelTemplate>
    );
};

export default TaskData;
