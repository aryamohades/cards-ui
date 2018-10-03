<template>
  <PageContent>
    <Title v-bind="titleProps"/>
    <FormContainer v-bind="formProps">
      <div class="form-container">
        <FormError v-bind="errorProps"/>
        <TextField v-bind="emailProps"/>
        <TextField v-bind="confirmEmailProps"/>
        <TextField v-bind="passwordProps"/>
        <SubmitButton v-bind="submitProps"/>
      </div>
    </FormContainer>
  </PageContent>
</template>

<script>
import FormContainer from '@/components/core/FormContainer';
import FormError from '@/components/core/FormError';
import SubmitButton from '@/components/core/SubmitButton';
import TextField from '@/components/core/TextField';
import PageContent from '@/components/core/PageContent';
import Title from '@/components/core/Title';
import RouterLink from '@/components/core/RouterLink';
import AccountInfo from '@/components/core/AccountInfo';

export default {
  components: {
    FormContainer,
    FormError,
    SubmitButton,
    TextField,
    PageContent,
    Title,
    RouterLink,
    AccountInfo
  },
  data() {
    const module = 'changeEmail';

    const formProps = {
      module
    };

    const errorProps = {
      module
    };

    const titleProps = {
      text: 'Change Email'
    };

    const emailProps = {
      module,
      field: 'email',
      label: 'New Email',
      placeholder: 'Choose a new email address'
    };

    const confirmEmailProps = {
      module,
      field: 'confirmEmail',
      label: 'Confirm New Email',
      placeholder: 'Confirm your new email address'
    };

    const passwordProps = {
      module,
      field: 'password',
      label: 'Password',
      placeholder: 'Enter your password',
      type: 'password'
    };

    const submitProps = {
      module,
      text: 'Change Email'
    };

    return {
      formProps,
      errorProps,
      titleProps,
      submitProps,
      emailProps,
      confirmEmailProps,
      passwordProps
    };
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.edit-links {
  display: flex;
  flex-direction: column;
  margin-top: 15px;
}

.edit-links > a:not(last-child) {
  margin-bottom: 12px;
}
</style>
