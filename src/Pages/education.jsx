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
                    Inequities persist in education, particularly evident in title one schools where essential life-saving knowledge, like CPR, remains scarce. Public health resources are disproportionately absent within low-income communities, leaving many without access to vital healthcare education. While affluent areas thrive on ample funding and resources, worldwide, children lack education on basic first aid, healthcare rights, and disease prevention. Shockingly, only 18% of individuals globally are proficient in administering CPR, crucial for restarting a heart. Now imagine, do you want to grow in a world where you, your friends, and your family could not be saved in an emergency? Let's change the narrative.
                </p>
            </div>
            <div className='education-page-container'>
                <h1 className='primary-heading'>First Aid Children's Book</h1>
                <p className="primary-text">
                    Made for children this book takes initiative by teaching children simple first aid such as treating a nose bleed, wound treatment and bruises. 
                </p>
            </div>
            <div className='education-page-container'>
                <h1 className='primary-heading'>Health Education Video Game</h1>
                <p className="primary-text">
                    It has been proven that doing the things one loves to do improves brain function and memory. In this era, many kids enjoy playing video games. So to take an interesting spin on things we are in the process of creating a health education and public health video game to encourage elementary, middle, high schoolers and adults alike to learn about healthcare, first-aid and more.  
                </p>
            </div>
            <div className='education-page-container'>
                <h1 className='primary-heading'>Heath Education Board Game</h1>
                <p className="primary-text">
                    It has been proven that doing the things one loves to do improves brain function and memory. In this era, many kids enjoy playing video games- but this is not so accessible at times, for reasons such as WiFi or just to cut screen time! So, we are in the process of creating a health education and public health board game to aid children, adults and the whole family in learning about healthcare, first aid, overall health and more!
                </p>
            </div>
            <div className='education-page-container'>
                <h1 className='primary-heading'>High School Senior CPR Training</h1>
                <p className="primary-text">
                    In partnership with Yale Emergency Medical Services and American Heart Association trained and licensed CPR instructors, we are taking to Connecticut as well as Texas to teach title-one school high school seniors ‘hands-on’ CPR training. Many schools use online programs or even a gym coach to train people nation-wide but is this so accessible, and if so is it credible? It is proven that ‘hands on’ activities tend to help many students remember actions better. Especially for activities such as CPR, you only have one chance to get it right so, learn with us?
                </p>
            </div>
            <Footer/>
        </div>
    )
}