import React, {
  useEffect,
  useState
} from 'react';

/*  Components  */
import HeaderHave from './HeaderHave/HeaderHave';
import HeaderDontHave from './HeaderDontHave/HeaderDontHave';

/*  RN Navigation  */
import auth from '@react-native-firebase/auth';

/*  Async Storage */
import AsyncStorage from '@react-native-async-storage/async-storage' 





const Header = ({  navigation: {  navigate  }  }) => {


  const [haveLogin, setHaveLogin] = useState()
  const [userName, setUserName] = useState("")
  const [userProfPic, setUserProfPic] = useState()


  useEffect(() => {
    async function detectLogin() {
      var getInfos = await AsyncStorage.getItem("haveLogin")
      const userInfos = auth().currentUser;

      
      if (getInfos !== null) {
        setHaveLogin(true) 
        setUserName(userInfos.displayName)
        setUserProfPic(userInfos.photoURL)
      }
      else {  
        setHaveLogin(false) 
      }
    }


    detectLogin()
  }, [])




  if (haveLogin) {
    return (
      <HeaderHave 
        navigate={  navigate  }
        username={  userName  }
      />
    )
  }
  else {
    return (
      <HeaderDontHave navigate={  navigate  }/>  
    )
  }
}

export default Header;