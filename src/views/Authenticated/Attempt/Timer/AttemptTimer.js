import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
import Container from '../../../../components/Container/Container';
import api from '../../../../api';
import useAuthenticatedOnly from '../../../../hooks/useAuthenticatedOnly';
import useInstanceWithToastsAndLoading from '../../../../hooks/api/useInstanceWithToastsAndLoading';
import AttemptPanelTemplate from '../AttemptPanelTemplate';
import LoadingOrChildren from '../../../../components/loading/LoadingOrChildren/LoadingOrChildren';
import Timer from '../../../../components/Timer/Timer';
import Button from '../../../../components/buttons/Button/Button';

const prepareData = relativeTime => {
    const date = new Date();

    return {
        relative_time: relativeTime,
        date,
    };
};

const AttemptTimer = () => {
    useAuthenticatedOnly();

    const { taskId, attemptId } = useParams();

    const [instance, loading] = useInstanceWithToastsAndLoading();

    const [relativeTime, setRelativeTime] = useState(null);
    const [active, setActive] = useState(false);

    useEffect(() => {
        instance.get(api.attempt.measurement(taskId, attemptId)).then(({ data }) => {
            setRelativeTime(data.relative_time);
            setActive(data.active);
        });
    }, []);

    useEffect(() => {
        let interval;
        if (active) {
            interval = setInterval(() => {
                setRelativeTime(time => time + 1);
            }, 1000);
        }

        return () => {
            if (active) {
                clearInterval(interval);
            }
        };
    }, [relativeTime, active]);

    const toggle = () => {
        setActive(prevActive => !prevActive);
        const data = prepareData(relativeTime);
        instance.post(api.attempt.measurementSave(taskId, attemptId), data);
    };

    return (
        <AttemptPanelTemplate>
            <Container variant={['center', 'marginTopLarge']}>
                <LoadingOrChildren loading={relativeTime === null}>
                    <Timer time={relativeTime ?? 0} />
                </LoadingOrChildren>
            </Container>
            {!(loading && relativeTime === null) && (
                <Container variant={['center', 'marginTopLarge']}>
                    <Button round size="large" variant="primary" disabled={loading} onClick={toggle}>
                        <FontAwesomeIcon icon={active ? faPause : faPlay} />
                    </Button>
                </Container>
            )}
        </AttemptPanelTemplate>
    );
};

export default AttemptTimer;
