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
import Time from '../../../../components/Time/Time';
import TaskTooltip from './TaskTooltip/TaskTooltip';
import CardData from './CardData/CardData';
import styles from './TaskData.module.scss';
import CoefficientOfVariation from './CoefficientOfVariation/CoefficientOfVariation';
import AccentTitle from '../../../../components/typography/AccentTitle/AccentTitle';
import Empty from '../../../../components/typography/Empty/Empty';

const TaskData = () => {
    const [data, setData] = useState({});

    const { taskId } = useParams();

    const [instance, loading, cancel] = useInstanceWithToastsAndLoading({
        redirectPath: routes.task.index,
    });

    const { formatDate, formatMessage } = useIntl();

    useCancellableEffect(
        () => {
            instance.get(api.task.data(taskId)).then(response => {
                const attempts = response.data.attempts.map(item => {
                    item.shortDate = formatDate(item.updated_at, {
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
                        <AccentTitle messageId="data.values" />
                        <Container variant={['smallItems']} className={styles.dataContainer}>
                            <CardData titleId="fastest">
                                <Time time={data.timeStatistics?.min} cutMeaninglessData />
                            </CardData>
                            <CardData titleId="slowest">
                                <Time time={data.timeStatistics?.max} cutMeaninglessData />
                            </CardData>
                            <CardData titleId="range">
                                <Time time={data.timeStatistics?.range} cutMeaninglessData />
                            </CardData>
                        </Container>
                        <AccentTitle messageId="data.average" />
                        <Container variant={['smallItems']} className={styles.dataContainer}>
                            <CardData titleId="average">
                                <Time time={data.timeStatistics?.avg} cutMeaninglessData />
                            </CardData>
                            <CardData titleId="standardDeviation">
                                <Time time={data.timeStatistics?.standardDeviation} cutMeaninglessData />
                            </CardData>
                            <CardData titleId="coefficientOfVariation">
                                <CoefficientOfVariation value={data.timeStatistics?.coefficientOfVariation} />
                                {}
                            </CardData>
                        </Container>
                        {length > 3 && (
                            <>
                                <AccentTitle messageId="data.quartiles" />
                                {(data.timeStatistics?.quartiles.q1 ?? null) !== null && (
                                    <Container variant={['smallItems']} className={styles.dataContainer}>
                                        <CardData titleId="quartile.lower">
                                            <Time time={data.timeStatistics.quartiles.q1} cutMeaninglessData />
                                        </CardData>
                                        <CardData titleId="median">
                                            <Time time={data.timeStatistics.quartiles.q2} cutMeaninglessData />
                                        </CardData>
                                        <CardData titleId="quartile.upper">
                                            <Time time={data.timeStatistics.quartiles.q3} cutMeaninglessData />
                                        </CardData>
                                    </Container>
                                )}
                            </>
                        )}

                        <ResponsiveContainer height={500} className={styles.chartContainer}>
                            <AreaChart data={data.attempts}>
                                <XAxis dataKey="shortDate" />
                                <YAxis domain={['dataMin', 'dataMax']} unit="s" />
                                <Tooltip content={<TaskTooltip data={data} />} />
                                <Area type="monotone" stroke={null} dataKey="relative_time" />
                                <ReferenceLine
                                    y={data.timeStatistics?.avg}
                                    label={formatMessage({ id: 'data.average' })}
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </>
                )}
            </LoadingOrChildren>
        </TaskPanelTemplate>
    );
};

export default TaskData;
