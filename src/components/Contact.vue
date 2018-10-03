<template>
  <PageContent>
    <Title v-bind="titleProps"/>
    <FormContainer v-bind="formProps">
      <div class="form-container">
        <FormError v-bind="errorProps"/>
        <TextField v-bind="nameProps"/>
        <TextField v-bind="emailProps"/>
        <TextAreaField v-bind="messageProps"/>
        <SubmitButton v-bind="submitButtonProps"></SubmitButton>
      </div>
    </FormContainer>
  </PageContent>
</template>

<script>
import PageContent from '@/components/core/PageContent';
import Title from '@/components/core/Title';
import FormContainer from '@/components/core/FormContainer';
import FormError from '@/components/core/FormError';
import TextField from '@/components/core/TextField';
import TextAreaField from '@/components/core/TextAreaField';
import SubmitButton from '@/components/core/SubmitButton';

export default {
  components: {
    PageContent,
    Title,
    FormContainer,
    FormError,
    TextField,
    TextAreaField,
    SubmitButton
  },
  data() {
    const titleProps = {
      text: 'Contact us'
    };

    const module = 'contact';

    const formProps = {
      module
    };

    const errorProps = {
      module
    };

    const nameProps = {
      module,
      field: 'name',
      label: 'Name',
      placeholder: 'Your name'
    };

    const emailProps = {
      module,
      field: 'email',
      label: 'Email',
      placeholder: 'Your email address'
    };

    const messageProps = {
      module,
      field: 'message',
      label: 'Message',
      placeholder: 'Your message',
      resizable: false,
      rows: 8
    };

    const submitButtonProps = {
      module,
      text: 'Send'
    };

    return {
      titleProps,
      formProps,
      errorProps,
      nameProps,
      emailProps,
      messageProps,
      submitButtonProps
    };
  }
};
</script>
