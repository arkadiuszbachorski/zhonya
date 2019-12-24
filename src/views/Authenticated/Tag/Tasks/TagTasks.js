import React, { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import { useParams } from 'react-router';
import { toast } from 'react-toastify';
import useAuthenticatedOnly from '../../../../hooks/useAuthenticatedOnly';
import useForm from '../../../../hooks/useForm';
import api from '../../../../api';
import TagPanelTemplate from '../TagPanelTemplate';
import FormWithCard from '../../../../components/forms/FormWithCard/FormWithCard';
import Input from '../../../../components/forms/Input/Input';
import Container from '../../../../components/Container/Container';
import useInstanceWithErrorsAndToastsAndLoading from '../../../../hooks/api/useInstanceWithErrorsAndToastsAndLoading';
import DeleteList from '../../../../components/DeleteList/DeleteList';

const TagTasks = () => {
    useAuthenticatedOnly();

    const { tagId } = useParams();

    const { formatMessage } = useIntl();

    const [instance, loading, errors] = useInstanceWithErrorsAndToastsAndLoading();

    const [form, handleChange, , setForm] = useForm({
        task: '',
    });

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        instance.get(api.tag.tasks(tagId)).then(response => {
            setTasks(response.data);
        });
    }, [tagId, instance]);

    useEffect(() => {
        if (form.task !== '') {
            instance.post(api.tagTask.attach(tagId, form.task)).then(() => {
                setTasks(prevTasks => {
                    const newTasks = [...prevTasks];
                    const index = newTasks.findIndex(item => item.id === parseInt(form.task, 10));
                    newTasks[index].has_queried_tag = true;

                    return newTasks;
                });
                setForm({
                    task: '',
                });
                toast.success(formatMessage({ id: 'toast.success.tag.tasks.attach' }));
            });
        }
    }, [form.task]);

    const detach = taskId => {
        instance.post(api.tagTask.detach(tagId, taskId)).then(() => {
            setTasks(prevTasks => {
                const newTasks = [...prevTasks];
                const index = newTasks.findIndex(item => item.id === taskId);
                newTasks[index].has_queried_tag = false;

                return newTasks;
            });
            toast.success(formatMessage({ id: 'toast.success.tag.tasks.detach' }));
        });
    };

    return (
        <TagPanelTemplate>
            <Container variant={['center', 'marginTopLarge']}>
                <FormWithCard
                    onSubmit={() => null}
                    loading={loading}
                    variant="edit"
                    titleId="tag.assign.title"
                    paragraphIds={['tag.assign.text']}
                    buttonSwitch={false}
                >
                    <Input
                        labelId="model.task.plural"
                        name="task"
                        value={form.task}
                        onChange={handleChange}
                        errors={errors.task}
                        select
                        options={tasks
                            .filter(item => !item.has_queried_tag)
                            .map(item => ({ value: item.id, label: item.name }))}
                    />
                    <DeleteList>
                        {tasks
                            .filter(item => item.has_queried_tag)
                            .map(item => (
                                <DeleteList.Item onClick={() => detach(item.id)}>{item.name}</DeleteList.Item>
                            ))}
                    </DeleteList>
                </FormWithCard>
            </Container>
        </TagPanelTemplate>
    );
};

export default TagTasks;
