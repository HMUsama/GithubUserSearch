
import { createStackNavigator } from 'react-navigation';

import ListScreen from '../screens/List';
import ListDetails from '../screens/ListDetails'

const MainStack = createStackNavigator({
    List: ListScreen,
    ListDetails: ListDetails,
},
    (navigationOptions = {
        headerMode: "none"
    })
);
export default MainStack