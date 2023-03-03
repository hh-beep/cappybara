import React, { 
  useState, 
  useEffect 
} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';

/*  Style  */
import Singin_Style from './Singin_Style';





const Singin = () => {

  const [pass, setPass] = useState("")
  const [email, setEmail] = useState("")


  return (
    <View>


      <View>
        <Text>Olá usuario! crie sua conta facilmente aqui para não perder os conteudos exclusivos</Text>
      </View>

    
    
      <View>
        <TouchableOpacity>
          <Text>Entrar na conta existente</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text>Criar Conta Agora</Text>
        </TouchableOpacity>
      </View>

    
    </View>
  )
}

export default Singin;