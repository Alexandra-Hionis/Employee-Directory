export default class SortGender extends Component {

    //Setting this.state.data tot the data json array
    state = {
        data,
        search: "",
        isMale: false,
        isFemale: false,
        isName: true,
        sortName: data
    }

    //Search by Input
    handleSearch = (event) => {
        this.setState({ search: event.target.value })
    }

    //Filter if Male check box is clicked
    handleMaleCheck = (event) => {
        this.setState({ isMale: event.target.checked })
        if (!this.state.isMale) {
            let filterByGender = this.state.data.filter(gender => {
                return gender.gender === "male"
            })
            this.setState({ data: filterByGender })
        } else {

            this.setState({ data })

        }
    }

    //Filter if Female check box is clicked
    handleFemaleCheck = (event) => {
        this.setState({ isFemale: event.target.checked })

        if (!this.state.isFemale) {
            let filterByGender = this.state.data.filter(gender => {
                return gender.gender === "female"
            })
            this.setState({ data: filterByGender })
        } else {
            this.setState({ data })
        }

    }
return (
    <div class="input-group mb-3">
    <div class="input-group-prepend">
      <div class="input-group-text">
        <input type="checkbox" aria-label="Checkbox for following text input">
      </div>
    </div>
    <input type="text" class="form-control" aria-label="Text input with checkbox">
  </div>
)
}


