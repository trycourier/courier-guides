import React, {useState} from 'react';
import {CourierProvider} from '@trycourier/react-provider';
import {PreferenceList} from '@trycourier/react-preferences';
import Divider from '@mui/material/Divider';
import UserNameModal from './usernameModal';
const PreferencesPage: React.FunctionComponent = () => {
    const [userName, setUserName] = useState<string>('');
    const [showUserNameModal, setShowUserNameModal] = useState<boolean>(true);
    const clientKey = process.env.REACT_APP_COURIER_CLIENT_KEY;
    return (
        <div className="preferences-page-container">
            <UserNameModal
                handleClose={() => setShowUserNameModal(false)}
                handleUserNameChange={(userName) => setUserName(userName)}
                isOpen={showUserNameModal}
                userName={userName}
            />

            {!showUserNameModal && clientKey && (
                <div className="preferences-center-courier-embed">
                    <h1 className="user-greeting">Hello, {userName}</h1>
                    <p>Configure your newsletter communications below</p>
                    <Divider />
                    <div className="preferences-center-courier-embed-list">
                        <CourierProvider
                            clientKey={clientKey}
                            userId={userName}>
                            <PreferenceList />
                        </CourierProvider>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PreferencesPage;
