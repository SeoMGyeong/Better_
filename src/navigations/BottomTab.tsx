import ProfileScreen from '@/app/ProfileScreen';
import HomeScreen from '@/screens';

import CategoryScreen from '@/screens/CategoryScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const BottomTab = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen name="Category" component={CategoryScreen} />
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomTab;
