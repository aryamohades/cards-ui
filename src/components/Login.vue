<template>
  <PageContent>
    <Title v-bind="titleProps"/>
    <FormContainer v-bind="formProps">
      <div class="form-container">
        <FormError v-bind="errorProps"/>
        <TextField v-bind="usernameProps"/>
        <TextField v-bind="passwordProps"/>
        <SubmitButton v-bind="submitProps"></SubmitButton>
      </div>
    </FormContainer>
    <div v-bind="containerProps">
      <RouterLink v-bind="registerProps"/>
      <RouterLink v-bind="forgotPasswordProps"/>
    </div>
  </PageContent>
</template>

<script>
import FormContainer from '@/components/core/FormContainer';
import FormError from '@/components/core/FormError';
import TextField from '@/components/core/TextField';
import SubmitButton from '@/components/core/SubmitButton';
import PageContent from '@/components/core/PageContent';
import Title from '@/components/core/Title';
import RouterLink from '@/components/core/RouterLink';

export default {
  components: {
    FormContainer,
    FormError,
    TextField,
    SubmitButton,
    PageContent,
    Title,
    RouterLink
  },
  data() {
    const module = 'login';

    const titleProps = {
      text: 'Sign in'
    };

    const formProps = {
      module
    };

    const errorProps = {
      module
    };

    const usernameProps = {
      module,
      field: 'username',
      placeholder: 'Username'
    };

    const passwordProps = {
      module,
      field: 'password',
      type: 'password',
      placeholder: 'Password'
    };

    const submitProps = {
      module,
      text: 'Login'
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

    const forgotPasswordProps = {
      text: 'Forgot your password?',
      to: { name: 'forgotPassword' },
      className: 'underline'
    };

    return {
      titleProps,
      formProps,
      errorProps,
      usernameProps,
      passwordProps,
      submitProps,
      containerProps,
      registerProps,
      forgotPasswordProps
    };
  }
};
</script>
