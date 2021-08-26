<template>
  <CCard>
    <CCardHeader>
      <slot name="header">
        <CIcon name="cil-grid"/> {{caption}}
      </slot>
    </CCardHeader>
    <CCardBody>
      <CDataTable
        :hover="hover"
        :striped="striped"
        :border="border"
        :small="small"
        :fixed="fixed"
        :items="items"
        :fields="fields"
        :items-per-page="small ? 20 : 10"
        :dark="dark"
        pagination
        @row-clicked="handleFunction"
      >
        <template #status="{item}">
          <td>
            <CBadge :color="getBadge(item.status)">{{item.status}}</CBadge>
            
          </td>
        </template>
      </CDataTable>
    </CCardBody>
  </CCard>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Table',
  props: {
    items: Array,
    fields: {
      type: Array,
      default () {
        // return ['username', 'registered', 'role', 'status']
        return ['name', 'email', 'specialty']
      }
    },
    caption: {
      type: String,
      default: 'Table'
    },
    hover: Boolean,
    striped: Boolean,
    border: Boolean,
    small: Boolean,
    fixed: Boolean,
    dark: Boolean
  },
  methods: {
    getBadge (status) {
      return status === 'Active' ? 'success'
        : status === 'Inactive' ? 'secondary'
          : status === 'Pending' ? 'warning'
            : status === 'Banned' ? 'danger' : 'primary'
    },
    handleFunction: function(item, index, column, event)
{
  console.log(item.email);

  axios.post('https://n3zqs6vlic.execute-api.us-east-1.amazonaws.com/sns', {
        name: item.name,
        email: item.email
      })
      .then(function (response) {
        //console.log(response);
        alert("이메일을 성공적으로 발송했습니다.")
      })
      .catch(function (error) {
        //console.log(error);
        alert(error);
      });
}
  }
}
</script>
<style>
table td {
  cursor: pointer;
}
</style>