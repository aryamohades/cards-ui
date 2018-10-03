<template>
  <PageContent>
    <Title v-bind="titleProps"/>
    <FormContainer v-bind="formProps">
      <div class="form-container">
        <TextField v-bind="emailProps"/>
        <TextField v-bind="usernameProps"/>
        <TextField v-bind="passwordProps"/>
        <SubmitButton v-bind="submitProps"></SubmitButton>
      </div>
    </FormContainer>
    <div v-bind="containerProps">
      <RouterLink v-bind="loginProps"/>
    </div>
  </PageContent>
</template>

<script>
import FormContainer from '@/components/core/FormContainer';
import TextField from '@/components/core/TextField';
import SubmitButton from '@/components/core/SubmitButton';
import PageContent from '@/components/core/PageContent';
import Title from '@/components/core/Title';
import RouterLink from '@/components/core/RouterLink';

export default {
  components: {
    FormContainer,
    TextField,
    SubmitButton,
    PageContent,
    Title,
    RouterLink
  },
  data() {
    const module = 'register';

    const titleProps = {
      text: 'Create your account'
    };

    const formProps = {
      module
    };

    const emailProps = {
      module,
      field: 'email',
      label: 'Email',
      placeholder: 'Your email address'
    };

    const usernameProps = {
      module,
      field: 'username',
      label: 'Username',
      placeholder: 'Choose a username'
    };

    const passwordProps = {
      module,
      field: 'password',
      type: 'password',
      label: 'Password',
      placeholder: 'Choose a password'
    };

    const submitProps = {
      module,
      text: 'Register'
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

    const loginProps = {
      text: 'Already have an account?',
      to: { name: 'login' },
      className: 'underline'
    };

    return {
      titleProps,
      formProps,
      emailProps,
      usernameProps,
      passwordProps,
      submitProps,
      containerProps,
      loginProps
    };
  }
};
</script>
