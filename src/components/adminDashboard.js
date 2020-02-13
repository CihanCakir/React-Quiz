import React from 'react';
import PropTypes from 'prop-types';
import { useStyles } from '../layout/dashboard/GeneralJSXstyling'
import Sidebar from '../layout/dashboard/Sidebar'
import '../layout/dashboard/dashboard.css';
import { Switch, Route } from "react-router-dom";
import Inooster from '../components/dashboard/inooster/Inooster';
import QuizApp from '../components/dashboard/inooster/QuizApp';
import Dortadim from '../components/dashboard/Dortadim';
import Dashboard from '../components/dashboard/Admin/Dashboard';







function AdminDashboard(props) {
    const classes = useStyles();

    /*
     anasayfa olarak göstermek istediğimiz componeneti                          
      <Route exact path={props.match.path} component={Dortadim} />
      olarak belirtip dashboard üzerinde değişik komponentleri göstermeye yarar
    */
    return (
        <div>
            <Sidebar props={props} />

            <div className="main-content">
                <main className={classes.content}>
                    <div className={classes.toolbar} />
                    <Switch>

                        <Route exact path={props.match.path} component={Dashboard} />
                        <Route path={`${props.match.path}/quiz-app`} component={QuizApp} />
                        <Route path={`${props.match.path}/inooster`} component={Inooster} />
                    </Switch>

                </main>


            </div>

        </div>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    container: PropTypes.instanceOf(typeof Element === 'undefined' ? Object : Element),
};

export default AdminDashboard;
