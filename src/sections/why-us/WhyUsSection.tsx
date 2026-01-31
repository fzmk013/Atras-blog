import styled from "styled-components"
import TitleText from "../../components/TitleText"
import { motion } from "framer-motion"
import Text from "../../ui/Text"
import  HeadphoneIcon from "../../icons/HeadphoneIcon"

function WhyUsSection() {
  return (
    <StyledWhyUsSection>
        <TitleText titleText="چرا اترس؟"/>
        <InfoCard/>
    </StyledWhyUsSection>
  )
}

const whyUsInfo = [
  {key: "1", title: "لورم ایپسوم", duration: 0.5, icon: <HeadphoneIcon/> , descriptionText: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."},
  {key: "2", title: "لورم ایپسوم", duration: 1, icon: <HeadphoneIcon/> , descriptionText: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."},
  {key: "3", title: "لورم ایپسوم", duration: 1.5, icon: <HeadphoneIcon/> , descriptionText: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.رم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.ویمبیسملوبظیملمظبنلمیظبنامخیئب انختیطنا یاطاتحیدب امندبتهانطزبنات طیبکاحخ"},
  {key: "4", title: "لورم ایپسوم", duration: 2, icon: <HeadphoneIcon/> , descriptionText: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طکیمبن خحسین بحخسینلبحخس یلمنحیسمب لحخسیبنه لحخیطب ههاکخهی تاخمهنب تما هحخفثسع 0مطیبنکمنبطل تامن یقفتطهقخنکمیلااخم بتاخحزب نماکتغز هخک طیانم ر./مزبلودمراحان گرافیک است."},
]

function InfoCard() {
  return(
      <InfoBox>
        <InfoWrapper>
          {
            whyUsInfo.map((info) => {
              return (
                <StyledSingleInfoCard
                    initial="hidden" //initial value
                    whileInView="visible" //final value
                    viewport={{once : true , amount: 0.5 }}
                    // transition={{duration : 1.5}}
                    transition={{duration : info.duration}}
                    variants={{
                      hidden : {opacity : 0, z:-50, y: 50},//initial condition
                      visible : {opacity : 1 , z:0, y: 0},//final condition
                    }}
                   key={info.key}>
                  <Text color="#8AE749" style={{display: "flex", gap: "1rem"}} variant="regular 24">
                    <span>{info.icon}</span>
                    <span>{info.title}</span>
                  </Text>
                  <Text variant="light 16" color="#B1B1B1">
                    {info.descriptionText}
                  </Text>
                </StyledSingleInfoCard>
              )
            })
          }

        </InfoWrapper>


      </InfoBox>
  )
}
export default WhyUsSection

const StyledWhyUsSection = styled.section`
    margin-top: 5rem;
    /* width: 100%; */
    display: flex;
    flex-direction: column;
    gap: 0rem;
`

const InfoBox = styled(motion .div)`
  margin-bottom: 4rem;

  padding: 4rem 1rem;
  /* padding: 2rem; */

  width: clamp(400px, 90vw, 1400px);

  /* border: 1px solid red; */
`


const InfoWrapper = styled.ul`

 display: flex;
  gap: 2rem;
  justify-content: space-between;
  align-items: stretch;

  flex-wrap: wrap; /* important for responsive */
`


const StyledSingleInfoCard = styled(motion.li)`
  flex: 1;                 
  max-width: 280px;        

  min-width: 220px;        

  display: flex;
  flex-direction: column;
  align-items: flex-start; /* better for text alignment */
  justify-content: flex-start;

  gap: 1rem;

  text-align: right;

  /* Force wrapping */
  /* word-wrap: break-word; */
  /* overflow-wrap: break-word; */
  /* white-space: normal; */

   border-left: 1px solid #B1B1B1;
   padding-left: 2rem;
  
     @media (max-width: 900px) {
    /* border-bottom: 1px solid #B1B1B1; */
    border-left: none;
    padding: 2rem 0rem;
  }

  &:last-child {
    border: none;
  }
`;
