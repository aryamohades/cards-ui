<template>
  <PageContent>
    <Title v-bind="titleProps"/>
    <div class="container">
      <div class="content">
        <AccountInfo v-bind="usernameInfoProps"/>
        <AccountInfo v-bind="joinedInfoProps"/>
        <AccountInfo v-bind="emailInfoProps"/>
        <div class="edit-links">
          <RouterLink v-bind="changeEmailProps"/>
          <RouterLink v-bind="changePasswordProps"/>
        </div>
      </div>
    </div>
  </PageContent>
</template>

<script>
import PageContent from '@/components/core/PageContent';
import Title from '@/components/core/Title';
import RouterLink from '@/components/core/RouterLink';
import AccountInfo from '@/components/core/AccountInfo';

export default {
  components: {
    PageContent,
    Title,
    RouterLink,
    AccountInfo
  },
  data() {
    const titleProps = {
      text: 'Account',
      align: 'left'
    };

    const usernameInfoProps = {
      label: 'Username',
      field: 'username'
    };

    const emailInfoProps = {
      label: 'Email',
      field: 'email'
    };

    const joinedInfoProps = {
      label: 'Joined',
      field: 'createdAt',
      type: 'date'
    };

    const changeEmailProps = {
      text: 'Change Email',
      to: { name: 'changeEmail' },
      className: 'button'
    };

    const changePasswordProps = {
      text: 'Change Password',
      to: { name: 'changePassword' },
      className: 'button'
    };

    return {
      titleProps,
      usernameInfoProps,
      emailInfoProps,
      joinedInfoProps,
      changeEmailProps,
      changePasswordProps
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
