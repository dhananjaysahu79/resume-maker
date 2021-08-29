import styled from 'styled-components';

export const HomepageSection = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const HomepageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    margin: 5px;
    text-align: center;
    align-content: space-between;
`;

export const Heading = styled.h1`
    margin-top: 45px;
    color: #242D33;
    font-size: 40px;
    margin-bottom: 20px;
`;
export const HomePageSubhead = styled.p`
    margin-top: 5px;
    color: #242D33;
    max-width: 400px;
    line-height: 30px;
`;

export const CurveContainer = styled.div`
    margin-top: 50px;
    height: 55vh;
    width: 100%;
    background: #fff;
`;

export const WhiteCurve = styled.div`
    height: 55vh;
    width: 100%;
    background: #F5F5F5;
    clip-path: polygon(100% 100%, 0 100%, 0 0, 100% 50%);
    /* clip-path: polygon(100% 100%, 0 100%, 0 50%, 100% 0); */
    position: absolute;
`;
export const GradientCurve = styled.div`
    height: 55vh;
    width: 100%;
    /* background: #02C0A5; */
    background: linear-gradient(to right,#313B47, #02C0A5);
    clip-path: polygon(100% 100%, 0 100%, 0 50%, 100% 0);
`;