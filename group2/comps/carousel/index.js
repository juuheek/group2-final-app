import {useState} from 'react';
import styled from 'styled-components';
import {IoMdArrowDroprightCircle, IoMdArrowDropleftCircle} from 'react-icons/io';


const default_data = [
    "https://res.cloudinary.com/dlzk0payu/image/upload/v1620156416/Anorexia_kepvd8.svg",
    "https://res.cloudinary.com/dlzk0payu/image/upload/v1620156492/Bullimia_t6vxoj.svg",
    "https://res.cloudinary.com/dlzk0payu/image/upload/v1620156606/Orthorexia_rag0py.svg",
    "https://res.cloudinary.com/dlzk0payu/image/upload/v1620185177/Binge_ntekpv.svg",
    "https://res.cloudinary.com/dlzk0payu/image/upload/v1620185223/Excessive_qbldkv.svg"

]

const Cont = styled.div`
    display: inline-flex;
    flex-direction: column;
`;

const CardCont = styled.div`
    display:flex;
    max-width 150px;
    overflow: hidden;
`;

const CardWrapper = styled.div`
    display:flex;
    left: ${props=>props.left}px;
    transition: left 0.5s;
    position: relative;
    align-items: center;
`;

const Card = styled.img`
    width: ${props=>props.dim}px;
    height: ${props=>props.hdim}px;
    object-fit: cover;
    position: relative;
    left: ${props =>props.left}px;
    z-index: ${props=>props.z};
    opacity: ${props=>props.op};
    transition: all 0.5s;
`;


const Controls = styled.div`
    display: flex;
    justify-content: space-between;
`;

const CtrlButtons = styled.div`

`;

const Carousel = ({
    imgdata = default_data
}) => {
    const [ind, setInd] = useState(0);
    const [le, setLe] = useState(0);

    const HandleImageChange = (i) => {
        if (i<0){
            i=0;
        }

        if (i>imgdata.length-1){
            i = imgdata.length-1;
        }

        setInd(i);
    }

    return <Cont>
        {/* <Card src={imgdata[ind]} /> */}
        <CardCont>
            
        <CardWrapper left={ind*-10}>
            {imgdata.map((o,i)=><Card 
            dim={i===ind ? 120: 110}
            hdim={i===ind ? 150 : 140}
            op={i===ind ? 1 : 1}
            z={i===ind ? imgdata.length+1 : imgdata.length - 1}
            left={(i*-100)+10}
            src={o} 
            key={i} />
            )}
        </CardWrapper>
        </CardCont>
        <Controls>
            <CtrlButtons onClick={()=>HandleImageChange(ind-1)}><IoMdArrowDropleftCircle color="#E67571" /></CtrlButtons>
            <CtrlButtons onClick={()=>HandleImageChange(ind+1)}><IoMdArrowDroprightCircle color="#E67571" /></CtrlButtons>

        </Controls>
    </Cont>
}

export default Carousel;