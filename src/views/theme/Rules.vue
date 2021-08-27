<template>
  <div>
    <CRow>
      <CCol lg="12">
        <CCard>
          <CCardHeader>
            <strong>전문분야 입력</strong>
          </CCardHeader>
          <CCardBody>
            <CRow>
              <CCol sm="6">
                <CInput v-model="RuleName"
                  label="Name"
                  placeholder="이름을 입력해주세요."
                />
              </CCol>
              <CCol sm="6">
                <CInput v-model="SiteName"
                  label="Email"
                  placeholder="이메일을 입력해주세요."
                />
              </CCol>
            </CRow>
            <CRow>
              <CCol sm="6">
                <CInput v-model="KeywordName"
                  label="Specialty"
                  placeholder="업무, 관심사 분야를 입력해주세요."
                />
              </CCol>
            </CRow>
            <CRow>
              <CCol align="right">
                <CButton type="submit" size="sm" color="primary" v-on:click="insertSite"><CIcon name="cil-check-circle"/> 입력</CButton>
                <!--  <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban"/> Reset</CButton> -->
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  </div>
  
</template>

<script>
import axios from 'axios'
import CTableWrapper from "../base/RuleTable.vue";

export default {
  name: 'Forms',
  components: { CTableWrapper },
  data () {
    return {
      SiteName: '',
      RuleName: '',
      KeywordName: '',
      SchedulerName: '',
      toDoItems: [],
      selected: [], // Must be an array reference!
      show: true,
      horizontal: { label:'col-3', input:'col-9' },
      options: ['Option 1', 'Option 2', 'Option 3'],
      selectOptions: [
        'Option 1', 'Option 2', 'Option 3',
        {
          value: 'some value',
          label: 'Selected option'
        }
      ],
      selectedOption: 'some value',

      formCollapsed: true,
      checkboxNames: ['Checkboxes', 'Inline Checkboxes',
                      'Checkboxes - custom', 'Inline Checkboxes - custom'],
      radioNames: ['Radios', 'Inline Radios',
                    'Radios - custom', 'Inline Radios - custom']
    }
  },
  // created () {           // 초기화 함수를 정의 한다.
  //   axios.get('https://7g3u095i99.execute-api.us-east-1.amazonaws.com/product/sites')
  //     .then(response => {
  //       this.toDoItems = response.data.map(r => r.data)     // 반환되는 값을 toDoItems에 저장한다.
  //     })
  //     .catch(e => {
  //       console.log('error : ', e)          // 에러가 나는 경우 콘솔에 에러를 출력한다
  //     })
  // },
  created () {           // 초기화 함수를 정의 한다.
    // axios.get('https://7g3u095i99.execute-api.us-east-1.amazonaws.com/product/rules')
    axios.get('https://n3zqs6vlic.execute-api.us-east-1.amazonaws.com/select')
      .then(response =>  {
        this.toDoItems = response.data.map(r => r);
      })
  },
  methods: {
    validator (val) {
      return val ? val.length >= 4 : false
    },
    insertSite: function() {
      axios.post('https://n3zqs6vlic.execute-api.us-east-1.amazonaws.com/insert', {
        name: this.RuleName,
        email: this.SiteName,
        specialty: this.KeywordName
      })
      .then(function (response) {
        console.log(response);
        alert("성공적으로 등록됐습니다...")
      })
      .catch(function (error) {
        console.log(error);
        alert(error);
      });
    },
    getRuleList () {
      let arr = [];
      for (let i= 0;i<=this.toDoItems.length -1;i++) {
        arr.push(
            { name : this.toDoItems[i][0],
              email : this.toDoItems[i][1],
              specialty : this.toDoItems[i][2]})
      }
      return arr;
    },
    getSiteList () {
      let arr = [];
      for (let i= 0;i<=this.toDoItems.length -1;i++) {
        arr.push({sitename : this.toDoItems[i][0], url : this.toDoItems[i][1]})
      }
      return arr;
    }
  }
}
</script>
