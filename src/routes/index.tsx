import React from 'react';

import { Switch, Route} from 'react-router-dom';

import Dashboard from '../pages/dashboard';
import Pikachu from '../pages/repository/Pikachu';
import Charmander from '../pages/repository/Charmander';
import Bulbasaur from '../pages/repository/Bulbasaur';
import Squirtle from '../pages/repository/Squirtle';

const Routes: React.FC = () => (
    <Switch>
        <Route path='/' exact component={Dashboard} />
        <Route path='/repository/Pikachu.tsx' component={Pikachu} />
        <Route path='/repository/Charmander.tsx' component={Charmander}/>
        <Route path='/repository/Bulbasaur.tsx' component={Bulbasaur}/>
        <Route path='/repository/Squirtle.tsx' component={Squirtle}/>

    </Switch>
);

export default Routes;
