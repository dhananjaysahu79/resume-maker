import React from 'react';
import { Button } from '../../globalStyles';
import {
   HomepageSection,
   HomepageWrapper,
   Heading,
   HomePageSubhead,
   CurveContainer,
   WhiteCurve,
   GradientCurve
} from './Homepage.elements';

function HomePage() {
    return (
        <>
         <HomepageSection>
            <HomepageWrapper>
                <Heading>The Online Resume Builder You Deserve</Heading>
                <HomePageSubhead>
                    Creating a Professional Resume and Cover Letter Has Never Been <strong>So Easy</strong>
                </HomePageSubhead>
                <Button marginTop = '20px' color = '#01C4A7' fontColor = '#fff' big = 'True'>
                    Get Started for Free
                </Button>
            </HomepageWrapper>

            <CurveContainer>
                <WhiteCurve>
                </WhiteCurve>
                <GradientCurve>
                </GradientCurve>
            </CurveContainer>


         </HomepageSection>
        </>
    );
}

export default HomePage;