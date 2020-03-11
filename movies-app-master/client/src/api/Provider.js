//Provider
import myContext from './acnt-mang';

class myProvider extends Component {

    state = {
        //Logged in User data goes here
        user: {


        }

    };

    render(){
        return (
            <myContext.Provider
                value={{
                    user: this.state.user,
                    getLoggedinUser: selectedID => {
                        const user = Object.assign({}, this.state.user);
                        user[selectedID].price = user[selectedID].price + 1;
                        this.setState({
                            cars
                        });
                    },
                    changeLoggedInUser: selectedID => {
                        const user = Object.assign({}, this.state.user);
                        user[selectedID].price = user[selectedID].price - 1;
                        this.setState({
                            user
                        });
                    }
                }}
            >
                {this.props.children}
            </myContext.Provider>
        );
    }




}