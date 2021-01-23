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
    render() {
        return (
          
            <ul>
            <li>
                <input type='radio' value='1' name='radio' id='radio1'/>
                <label for='radio1'>Female</label>
            </li>
            <li>
                <input type='radio' value='2' name='radio'  id='radio2'/>
                <label for='radio2'>Male</label>
            </li>
            <li>
                <input type='radio' value='3' name='radio'  id='radio3'/>
                <label for='radio3'>Other</label>
            </li>
        </ul>
        )
}
    

}

