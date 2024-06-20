import { useContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

import { Button } from 'components/common/Button';
import { IconSvg } from 'components/common/IconSvg';
import { Context } from 'index';

const AuthControl = ({ openModalLog, openModalReg, handleClose }) => {
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);

  const navigate = useNavigate();

  return (
    <>
      {!user ? (
        <>
          <div>
            <Button
              margin="0"
              height="48px"
              onClick={openModalLog}
              login="true"
            >
              <IconSvg
                icon="login"
                size="20px"
                mr="8px"
                stroke="var(--primary)"
              />
              Log in
            </Button>
          </div>
          <div>
            <Button
              type="button"
              onClick={openModalReg}
              background="black"
              backgroundhover="var(--primary)"
              margin="0"
              color="white"
              width="166px"
              height="48px"
            >
              Registration
            </Button>
          </div>
        </>
      ) : (
        <div>
          <Button
            type="button"
            background="black"
            backgroundhover="var(--primary)"
            margin="0"
            color="white"
            width="166px"
            height="48px"
            onClick={() => {
              auth.signOut();
              // handleClose();
              navigate('/');
            }}
          >
            Log Out
          </Button>
        </div>
      )}
    </>
  );
};

export default AuthControl;
