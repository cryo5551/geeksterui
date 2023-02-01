import { Flex, Text, Avatar, Image, Link, Button } from '@chakra-ui/react';
import userData from './UserData';
import { useState } from 'react';
import Nevbar from './components/Nevbar';
import Header from './components/Header';
import { ArrowRightIcon, ArrowLeftIcon } from '@chakra-ui/icons';

function App() {
  const [users] = useState(userData);
  const [activeUser, setActiveUser] = useState(1);


  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  const [active4, setActive4] = useState(false);
  const [active5, setActive5] = useState(false);
  const [active6, setActive6] = useState(false);
  const [active7, setActive7] = useState(false);
  const [active8, setActive8] = useState(false);
  const [active9, setActive9] = useState(false);
  const [active10, setActive10] = useState(false);
  const [active11, setActive11] = useState(false);


  const getPrevUser = () => {
    let user = activeUser;
    if(user === 1) user = 11;
    else user -= 1;
    setActiveUser(user);
  }

  const getNextUser = () => {
    let user = activeUser;
    if(user === 11) user = 1;
    else user += 1;
    setActiveUser(user);
  }



  return (
    <div className='app'>
      <Nevbar />
      <Header />

      <Flex className='main-flex-container'>
        <Flex className='mobile-view' ms="10" ps="5" pe="5" pb="5" flexDirection="column" justifyContent="space-between">
          <Flex h="120px" justifyContent="space-between">
            <Avatar onClick={e => setActiveUser(1)} className={(active1 || activeUser === 1) ? 'avtr-left' : 'avtr'} name={users["1"].name} src={users["1"].img} size='lg' onMouseEnter={e => setActive1(true)} onMouseLeave={e => setActive1(false)} />
            <Avatar onClick={e => setActiveUser(2)} className={(active2 || activeUser === 2) ? 'avtr-left' : 'avtr'} name={users["2"].name} src={users["2"].img} size='lg' mt='5' onMouseEnter={e => setActive2(true)} onMouseLeave={e => setActive2(false)} />
          </Flex>
          <Flex h="160px">
            <Avatar onClick={e => setActiveUser(4)} className={(active3 || activeUser === 4) ? 'avtr-left' : 'avtr'} name={users["4"].name} src={users["4"].img} size='lg' mt="20" onMouseEnter={e => setActive3(true)} onMouseLeave={e => setActive3(false)} />
            <Avatar onClick={e => setActiveUser(3)} className={(active4 || activeUser === 3) ? 'avtr-left' : 'avtr'} name={users["3"].name} src={users["3"].img} size='lg' ms="16" onMouseEnter={e => setActive4(true)} onMouseLeave={e => setActive4(false)} />
          </Flex>
          <Flex h="140px" justifyContent="space-around">
            <Avatar onClick={_ => setActiveUser(6)} className={(active5 || activeUser === 6) ? 'avtr-left' : 'avtr'} name={users["6"].name} src={users["6"].img} size='lg' mt="16" onMouseEnter={e => setActive5(true)} onMouseLeave={e => setActive5(false)} />
            <Avatar onClick={_ => setActiveUser(5)} className={(active6 || activeUser === 5) ? 'avtr-left' : 'avtr'} name={users["5"].name} src={users["5"].img} size='lg' mt="2" onMouseEnter={e => setActive6(true)} onMouseLeave={e => setActive6(false)} />
          </Flex>
        </Flex>

        <div className='user-card'>
          <button onClick={getPrevUser}><ArrowLeftIcon cursor="pointer"/></button>
          <div className='user-info'>
            <Flex className="user-prfile" flexDirection="column" p='2' alignItems='center'>
              <Avatar name={users[activeUser].name} src={users[activeUser].img} size='lg' />
              <Text>{users[activeUser].name}</Text>
              <Image
                boxSize='50px'
                objectFit="contain"
                src={users[activeUser].org}
                alt='Organization'
              />
            </Flex>

            <Flex className='user-data' flexDirection="column" p='2'>
              <Flex justifyContent="flex-end" alignItems="center" me="3">
                <Image
                  boxSize='15px'
                  objectFit="contain"
                  src="https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg"
                  alt='Organization'
                />
                <Text ms='2' fontSize="x-small">Watch Testimonial</Text>
              </Flex>

              <Text p="1" fontSize="sm">{users[activeUser].description}</Text>
              <Link p="2" fontSize="sm" >Read More...</Link>

            </Flex>
          </div>
          <button onClick={getNextUser}> <ArrowRightIcon cursor="pointer" /> </button>
        </div>

        <Button className='btn-more' colorScheme="whatsapp">Read More Testimonial</Button>

        <Flex className='mobile-view' me="10" ps="5" pe="5" flexDirection="column" justifyContent="space-between">
          <Flex h="140px" justifyContent="space-between">
            <Avatar onClick={e => setActiveUser(7)} className={(active7 || activeUser === 7) ? 'avtr-left' : 'avtr'} name={users["7"].name} src={users["7"].img} size='lg' onMouseEnter={e => setActive7(true)} onMouseLeave={e => setActive7(false)} />
            <Avatar onClick={e => setActiveUser(8)} className={(active8 || activeUser === 8) ? 'avtr-left' : 'avtr'} name={users["8"].name} src={users["8"].img} size='lg' mt="10" onMouseEnter={e => setActive8(true)} onMouseLeave={e => setActive8(false)} />
          </Flex>
          <Flex h="140px" justifyContent="center">
            <Avatar onClick={e => setActiveUser(9)} className={(active9 || activeUser === 9) ? 'avtr-left' : 'avtr'} name={users["9"].name} src={users["9"].img} size='lg' onMouseEnter={e => setActive9(true)} onMouseLeave={e => setActive9(false)} />
          </Flex>
          <Flex h="140px" justifyContent="space-between">
            <Avatar onClick={e => setActiveUser(10)} className={(active10 || activeUser === 10) ? 'avtr-left' : 'avtr'} name={users["10"].name} src={users["10"].img} size='lg' onMouseEnter={e => setActive10(true)} onMouseLeave={e => setActive10(false)} />
            <Avatar onClick={e => setActiveUser(11)} className={(active11 || activeUser === 11) ? 'avtr-left' : 'avtr'} name={users["11"].name} src={users["11"].img} size='lg' mt="10" onMouseEnter={e => setActive11(true)} onMouseLeave={e => setActive11(false)} />
          </Flex>
        </Flex>
      </Flex>


    </div>
  );
}

export default App;
