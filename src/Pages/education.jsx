import '../App.css';
import Navbar from "../Components/Navbar";
import Footer from '../Components/Footer'


export function Education() {
    return (
        <div className='App'>
            <Navbar/>
            <div className='education-page-container'>
                <h1 className='primary-heading'>Education</h1>
                <p className="primary-text">
                    Educational inequities are still pervasive, especially in Title I schools where crucial life-saving knowledge, such as CPR, is often missing. Public health resources are disproportionately scarce in low-income communities, leaving many without access to essential healthcare education. While affluent areas benefit from ample funding and resources, children around the world lack education on basic first aid, healthcare rights, and disease prevention. Alarmingly, only 18% of people globally are proficient in administering CPR, a skill critical for restarting a heart. Imagine living in a world where neither you nor your loved ones could be saved in an emergency. Let's work together to change this reality.
                </p>
            </div>
            <div className='education-page-container'>
                <h1 className='primary-heading'>First Aid Children's Book</h1>
                <p className="primary-text">
                    Designed for children, this book introduces eleven simple first aid techniques such as treating nosebleeds, managing wounds, and caring for bruises. By making these skills accessible and engaging, we aim to empower the youngest members of our society with the knowledge to act in emergencies. The book features colorful illustrations and relatable characters to make learning enjoyable and memorable.
                </p>
            </div>
            <div className='education-page-container'>
                <h1 className='primary-heading'>Health Education Video Game</h1>
                <p className="primary-text">
                    Engaging in enjoyable activities has been shown to enhance brain function and memory. In today's digital age, many children love playing video games. To leverage this interest, we are developing a health education video game. This innovative game will teach elementary, middle, and high school students, as well as adults, about healthcare, first aid, and public health in an interactive and fun way.
                </p>
            </div>
            <div className='education-page-container'>
                <h1 className='primary-heading'>Heath Education Board Game</h1>
                <p className="primary-text">
                    While video games are popular, they are not always accessible due to factors like internet connectivity and the need to reduce screen time. Therefore, we are also creating a health education board game. This game will offer an engaging way for children, adults, and families to learn about healthcare, first aid, and overall health. By bringing education to the table, we hope to make learning a communal and enjoyable experience.
                </p>
            </div>
            <div className='education-page-container'>
                <h1 className='primary-heading'>High School Senior CPR Training</h1>
                <p className="primary-text">
                    In collaboration with Yale Emergency Medical Services and the American Heart Association, we are bringing hands-on CPR training to high school seniors in Title I schools across Connecticut and Texas. Many schools rely on online programs or gym coaches for training, but these methods are not always accessible or effective. Hands-on training has been proven to enhance retention and understanding, especially for critical skills like CPR. With this initiative, we aim to ensure that students are well-prepared to act in life-saving situations. Join us and learn CPR the right way!
                </p>
            </div>
            <Footer/>
        </div>
    )
}