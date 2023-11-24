import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

const steps = [
    {
        id: '0',
        message: 'Hey Geek!',

        // This calls the next id
        // i.e. id 1 in this case
        trigger: '1',
    }, {
        id: '1',

        // This message appears in
        // the bot chat bubble
        message: 'Please write your username',
        trigger: '2'
    }, {
        id: '2',
        user: true,
        trigger: '3',
    }, {
        id: '3',
        message: " hi {previousValue}, how can I help you?",
        trigger: '4'
    }, {
        id: '4',
        user: true,
        trigger: '5'
    },
    {
        id: '5',
        message: 'This may help you...',
        trigger: '6'
    },
    {
        id: '6',
        options: [
            { value: 1, label: 'View Courses', trigger: 'course' },
            { value: 2, label: 'Tests', trigger: 'test' },
        ],

    }, {
        id: 'course',
        message: 'These are the courses',
        trigger:'7'
        
    }, {
        id:'7',
        options: [{ value: 1, label: 'java' }, { value: 2, label: 'aptitude' }]
    },
    
    {
        id: 'test',
        message: 'These are tests here...',
        trigger:'8',
    },{
        id:'8',
        options: [{ value: 1, label: 'java-core' }, { value: 2, label: 'Aptitude' }],
        trigger:'9'
    },
    {
        id:'9',
        user:true,
        trigger:'course'
    }

    //id:'6',
    //options:[{value:1,label:'Java'},{value:2,label:'Aptitude'}],

];

// Creating our own theme
const theme = {
    background: '#ffffff',
    headerBgColor: '#FFA500',
    headerFontSize: '20px',
    botBubbleColor: '#ffbf00',
    headerFontColor: 'white',
    botFontColor: 'white',
    userBubbleColor: '#FF5733',
    userFontColor: 'white',
    
};

// Set some properties of the bot
const config = {
    botAvatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkZogLiazwiJj_L12PtH4_9xSkOnjbUnLnCQ&usqp=CAU",
    floating: true,
};

function Chatbot() {
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <ChatBot

                    // This appears as the header
                    // text for the chat bot
                    headerTitle="LMS Bot"
                    steps={steps}
                    {...config}

                />
            </ThemeProvider>
        </div>
    );
}

export default Chatbot;
