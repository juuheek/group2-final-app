import {useState} from 'react';
import styled from 'styled-components';
import {IoMdArrowDroprightCircle, IoMdArrowDropleftCircle} from 'react-icons/io';


const default_data = {
  
  imgs:  [
        "https://res.cloudinary.com/dlzk0payu/image/upload/v1620710761/Group_211_zdoz3p.svg",
        "https://res.cloudinary.com/dlzk0payu/image/upload/v1620710812/Group_212_eqeb75.svg",
        "https://res.cloudinary.com/dlzk0payu/image/upload/v1620710534/Group_213_ak9og4.svg",
        "https://res.cloudinary.com/dlzk0payu/image/upload/v1620710855/Group_214_n6uce5.svg",
        "https://res.cloudinary.com/dlzk0payu/image/upload/v1620710879/Group_215_wq04q9.svg"
    ],
        
} 

// const Imgss = "https://res.cloudinary.com/dlzk0payu/image/upload/v1620711850/Group_221_haqiwc.svg,https://res.cloudinary.com/dlzk0payu/image/upload/v1620711850/Group_222_z4io5e.svg,https://res.cloudinary.com/dlzk0payu/image/upload/v1620711849/Group_223_naufel.svg,https://res.cloudinary.com/dlzk0payu/image/upload/v1620711849/Group_224_m3tqar.svg,https://res.cloudinary.com/dlzk0payu/image/upload/v1620711849/Group_225_xauk1t.svg";

// const ImgsArrr = Imgss.split(",");

// const Imgs = [
//     "https://res.cloudinary.com/dlzk0payu/image/upload/v1620711850/Group_221_haqiwc.svg",
//     "https://res.cloudinary.com/dlzk0payu/image/upload/v1620711850/Group_222_z4io5e.svg",
//     "https://res.cloudinary.com/dlzk0payu/image/upload/v1620711849/Group_223_naufel.svg",
//     "https://res.cloudinary.com/dlzk0payu/image/upload/v1620711849/Group_224_m3tqar.svg",
//     "https://res.cloudinary.com/dlzk0payu/image/upload/v1620711849/Group_225_xauk1t.svg"

// ]

const Cont = styled.div`
    display: inline-flex;
    flex-direction: row;
    justify-content:center;
    align-items:center;
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
    border-radius: 10px;
`;


const Controls = styled.div`
    display: flex;
    justify-content: space-between;
`;

const CtrlButtons = styled.div`
display:flex;
padding:20px;

`;

const Carousel = ({
    imgdata = default_data.imgs,
    onTitle = () => {},
    onCards = () =>{},
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
        onTitle(i);
        // onCards(i);
        setInd(i);
    }

    return <Cont>
        {/* <Card src={imgdata[ind]} /> */}

        <CtrlButtons onClick={()=>HandleImageChange(ind-1)}>
                <IoMdArrowDropleftCircle color="#E67571" />
            </CtrlButtons>
        <CardCont>
            
        <CardWrapper left={ind*-10}>
            {imgdata.map((o,i)=><Card 
            dim={i===ind ? 120: 110}
            hdim={i===ind ? 150 : 130}
            op={i===ind ? 1 : 0.8}
            z={i===ind ? imgdata.length+1 : imgdata.length - 1}
            left={(i*-100)+10}
            src={o} 
            key={i} />
            )}
        </CardWrapper>
        </CardCont>
            <CtrlButtons onClick={()=>HandleImageChange(ind+1)}>
                <IoMdArrowDroprightCircle color="#E67571" />
            </CtrlButtons>
        {/* <Controls>
            


        </Controls> */}
    </Cont>
}

export default Carousel;