const Errors = {
  emptyError: '',

  student: {
    studentCodeMustHave9Numbers: 'Mã số sinh viên phải chứa 9 số',
    studentCodeInvalid: 'Mã số sinh viên không đúng'
  },

  cash: {
    invalidFormat: 'Số tiền không đúng định dạng',
    mustBeLessThanBalance: 'Không được lớn hơn số dư',
    mustBeLessThanCost: 'Không được lớn hơn học phí',
    mustBeDivisibleBy1000: 'Phải là bội số của 1000 đồng',
    mustBeChoiceStudent: 'Hãy nhập mã số sinh viên trước'
  }
}

export default Errors
