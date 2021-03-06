import React, { useState, useEffect } from 'react';
import { Dimensions, View } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph, Appbar, ActivityIndicator, Colors  } from 'react-native-paper';
import styles from '../lib/Styles';

import { useUserData } from '../lib/User';

const { width } = Dimensions.get('window');

export default ({ navigation }) => {
    const [loading, setLoading] = useState(true);
    const user =  useUserData(); 

    useEffect(() => {
        if (user !== null) {
            setLoading(false);
        } 
    }, [user]);

    console.log('user on home page ====>', user);
    const LeftContent = props => <Avatar.Icon {...props} icon='folder' />

    return (
        loading ? 
                <View style={styles.container}>
                    <ActivityIndicator animating={true} color={Colors.red800} /> 
                </View>
                
            : 
                <>  
                    <Appbar.Header width={width}>
                        <Appbar.BackAction onPress={()=>console.log('hello')} />
                        <Appbar.Content title={'effortLESS Chat'} />
                    </Appbar.Header>
                    <Card style={{width: width}}>
                        <Card.Title title='Home' subtitle={user.screenName !== null ? user.screenName : ''} left={LeftContent} />
                        <Card.Content>
                        <Title>{user.username}</Title>
                        <Paragraph>Card content</Paragraph>
                        </Card.Content>
                        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                        <Card.Actions>
                        <Button>Cancel</Button>
                        <Button>Ok</Button>
                        </Card.Actions>
                        <Button onPress={() => navigation.navigate('Conversations')}>Go to Conversations</Button>
                    </Card>
                </>
    );
};