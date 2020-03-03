import React, { useState } from 'react';
import { useIntl } from 'react-intl';
import { useParams } from 'react-router';
import { toast } from 'react-toastify';
import useAuthenticatedOnly from '../../../../hooks/useAuthenticatedOnly';
import useForm from '../../../../hooks/useForm';
import api from '../../../../api';
import TaskPanelTemplate from '../TaskPanelTemplate';
import FormWithCard from '../../../../components/forms/FormWithCard/FormWithCard';
import Input from '../../../../components/forms/Input/Input';
import Container from '../../../../components/Container/Container';
import useInstanceWithErrorsAndToastsAndLoading from '../../../../hooks/api/useInstanceWithErrorsAndToastsAndLoading';
import DeleteList from '../../../../components/DeleteList/DeleteList';
import useCancellableEffect from '../../../../hooks/useCancellableEffect';

const TaskTags = () => {
    useAuthenticatedOnly();

    const { taskId } = useParams();

    const { formatMessage } = useIntl();

    const [instance, loading, errors, cancel] = useInstanceWithErrorsAndToastsAndLoading();

    const [form, handleChange, , setForm] = useForm({
        tag: '',
    });

    const [tags, setTags] = useState([]);

    useCancellableEffect(
        () => {
            instance.get(api.task.tags(taskId)).then(response => {
                setTags(response.data);
            });
        },
        [taskId],
        cancel,
    );

    useCancellableEffect(
        () => {
            if (form.tag !== '') {
                instance.post(api.tagTask.attach(form.tag, taskId)).then(() => {
                    setTags(prevTasks => {
                        const newTasks = [...prevTasks];
                        const index = newTasks.findIndex(item => item.id === parseInt(form.tag, 10));
                        newTasks[index].has_queried_task = true;

                        return newTasks;
                    });
                    setForm({
                        tag: '',
                    });
                    toast.success(formatMessage({ id: 'toast.success.task.tags.attach' }));
                });
            }
        },
        [form.tag, taskId],
        cancel,
    );

    const detach = tagId => {
        instance.post(api.tagTask.detach(tagId, taskId)).then(() => {
            setTags(prevTasks => {
                const newTasks = [...prevTasks];
                const index = newTasks.findIndex(item => item.id === tagId);
                newTasks[index].has_queried_task = false;

                return newTasks;
            });
            toast.success(formatMessage({ id: 'toast.success.task.tags.detach' }));
        });
    };

    return (
        <TaskPanelTemplate>
            <Container variant={['center', 'marginTopLarge']}>
                <FormWithCard
                    onSubmit={() => null}
                    loading={loading}
                    variant="edit"
                    titleId="task.assign.title"
                    paragraphIds={['task.assign.text']}
                    buttonSwitch={false}
                >
                    <Input
                        labelId="model.tag.plural"
                        name="tag"
                        value={form.tag}
                        onChange={handleChange}
                        errors={errors.tag}
                        select
                        options={tags
                            .filter(item => !item.has_queried_task)
                            .map(item => ({ value: item.id, label: item.name }))}
                    />
                    <DeleteList>
                        {tags
                            .filter(item => item.has_queried_task)
                            .map(item => (
                                <DeleteList.Item key={item.id} onClick={() => detach(item.id)}>
                                    {item.name}
                                </DeleteList.Item>
                            ))}
                    </DeleteList>
                </FormWithCard>
            </Container>
        </TaskPanelTemplate>
    );
};

export default TaskTags;
