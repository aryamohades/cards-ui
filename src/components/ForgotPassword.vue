<template>
  <PageContent>
    <Title v-bind="titleProps"/>
    <FormContainer v-bind="formProps">
      <div class="form-container">
        <FormError v-bind="errorProps"/>
        <TextField v-bind="emailProps"/>
        <SubmitButton v-bind="submitButtonProps"></SubmitButton>
      </div>
    </FormContainer>
    <div v-bind="containerProps">
      <RouterLink v-bind="registerProps"/>
      <RouterLink v-bind="loginProps"/>
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
    const module = 'forgotPassword';

    const titleProps = {
      text: 'Forgot your password?'
    };

    const formProps = {
      module
    };

    const errorProps = {
      module
    };

    const emailProps = {
      module,
      field: 'email',
      label: 'Email',
      placeholder: 'Enter your email address'
    };

    const submitButtonProps = {
      module,
      text: 'Reset Password'
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

    const registerProps = {
      text: 'Don\'t have an account?',
      to: { name: 'register' },
      className: 'underline'
    };

    const loginProps = {
      text: 'Already have an account?',
      to: { name: 'login' },
      className: 'underline'
    };

    return {
      titleProps,
      formProps,
      errorProps,
      emailProps,
      submitButtonProps,
      containerProps,
      registerProps,
      loginProps
    };
  }
};
</script>
