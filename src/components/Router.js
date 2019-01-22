import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import ShowList from './ShowList';
import ShowInfo from './ShowInfo';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root">
                <Scene
                    navigationBarStyle={{ backgroundColor: '#7ec0ee' }}
                    titleStyle={{ textAlign: 'center', flex: 1, color: '#FFD700' }}
                    key="showlist" 
                    component={ShowList} 
                    title="TVShows" 
                    initial 
                />
                <Scene 
                    navigationBarStyle={{ backgroundColor: '#7ec0ee' }}
                    titleStyle={{ textAlign: 'center', flex: 1, marginRight: 70, color: '#FFD700' }}
                    key="showinfo" 
                    component={ShowInfo} 
                    title="Show's Info" 
                />
            </Scene>
        </Router>
    );
};

export default RouterComponent;