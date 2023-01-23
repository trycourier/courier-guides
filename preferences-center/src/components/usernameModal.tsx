import * as React from 'react';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

interface IUserNameModalProps {
    userName: string;
    isOpen: boolean;
    handleClose: () => void;
    handleUserNameChange: (value: string) => void;
}
const UserNameModal: React.FunctionComponent<IUserNameModalProps> = ({
    userName,
    isOpen,
    handleClose,
    handleUserNameChange,
}) => {
    return (
        <div>
            <Dialog open={isOpen} onClose={handleClose}>
                <DialogTitle>UserName</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Enter your username to modify your newsletter
                        preferences
                    </DialogContentText>
                    <Input
                        autoFocus
                        margin="dense"
                        id="username"
                        aria-label="username"
                        type="text"
                        fullWidth
                        value={userName}
                        onChange={(e) => handleUserNameChange(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Okay</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default UserNameModal;
