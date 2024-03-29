import { Image, FlatList } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

import user from '../../assets/data/user.json';
import ProfileHeader from './ProfileHeader';
import FeedGridView from '../../components/FeedGridView/FeedGridView';

const ProfileScreen = () => {
    const route = useRoute();
    // console.log(route.params);
    const navigation = useNavigation();

    const { userId } = route.params;
    // query the user with userID
    // navigation.setOptions({ title: user.username })

    return (
        <FeedGridView
            data={user.posts}
            ListHeaderComponent={ProfileHeader}
        />
    );
};

export default ProfileScreen;