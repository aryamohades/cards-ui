<template>
  <PageContent>
    <Title v-bind="titleProps"/>
    <FormContainer v-bind="formProps">
      <div class="form-container">
        <FormError v-bind="errorProps"/>
        <TextField v-bind="passwordProps"/>
        <TextField v-bind="confirmPasswordProps"/>
        <SubmitButton v-bind="submitButtonProps"></SubmitButton>
      </div>
    </FormContainer>
    <div v-bind="containerProps">
      <RouterLink v-bind="startOverProps"/>
    </div>
  </PageContent>
</template>

<script>
import PageContent from '@/components/core/PageContent';
import Title from '@/components/core/Title';
import FormContainer from '@/components/core/FormContainer';
import FormError from '@/components/core/FormError';
import TextField from '@/components/core/TextField';
import SubmitButton from '@/components/core/SubmitButton';
import RouterLink from '@/components/core/RouterLink';

export default {
  components: {
    PageContent,
    Title,
    FormContainer,
    FormError,
    TextField,
    SubmitButton,
    RouterLink
  },
  data() {
    const module = 'resetPassword';

    const titleProps = {
      text: 'Choose a new password'
    };

    const formProps = {
      module
    };

    const errorProps = {
      module
    };

    const passwordProps = {
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

    const submitButtonProps = {
      module,
      text: 'Update Password'
    };

    const containerProps = {
      style: {
        display: 'flex',
        justifyContent: 'center',
        color: '#777',
        fontSize: '14px',
        marginTop: '16px'
      }
    };

    const startOverProps = {
      text: 'Start over',
      to: { name: 'forgotPassword' },
      className: 'underline'
    };

    return {
      titleProps,
      formProps,
      errorProps,
      passwordProps,
      confirmPasswordProps,
      submitButtonProps,
      containerProps,
      startOverProps
    };
  }
};
</script>
