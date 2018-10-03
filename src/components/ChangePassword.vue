<template>
  <PageContent>
    <Title v-bind="titleProps"/>
    <FormContainer v-bind="formProps">
      <div class="form-container">
        <FormError v-bind="errorProps"/>
        <TextField v-bind="currentPasswordProps"/>
        <TextField v-bind="newPasswordProps"/>
        <TextField v-bind="confirmPasswordProps"/>
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
    const module = 'changePassword';

    const formProps = {
      module
    };

    const errorProps = {
      module
    };

    const titleProps = {
      text: 'Change Password'
    };

    const currentPasswordProps = {
      module,
      field: 'currentPassword',
      label: 'Current Password',
      placeholder: 'Enter your current password',
      type: 'password'
    };

    const newPasswordProps = {
      module,
      field: 'password',
      label: 'New Password',
      placeholder: 'Choose a new password',
      type: 'password'
    };

    const confirmPasswordProps = {
      module,
      field: 'confirmPassword',
      label: 'Confirm New Password',
      placeholder: 'Confirm your new password',
      type: 'password'
    };

    const submitProps = {
      module,
      text: 'Change Password'
    };

    return {
      formProps,
      errorProps,
      titleProps,
      submitProps,
      currentPasswordProps,
      newPasswordProps,
      confirmPasswordProps
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
