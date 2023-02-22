import styled from "styled-components";

const Landing =()=>{
    return(
        <Container>
            <h1>채식인들을 위한 채식 비서: 채삐</h1>
            <ImageFrame>
                <img src="/assets/tomatoes.jpeg" alt="스플래쉬 이미지"/>
                <img src="/assets/kitchen.jpg" alt="스플래쉬 이미지"/>
                <img src="/assets/bowl-of-fruit.jpeg" alt="스플래쉬 이미지"/>
            </ImageFrame>
            <div>
                일상속 채식인들은 대중적이지 않은 식단으로 인해 메뉴 선택에 어려움을 겪습니다.
                채삐는 채식인들의 라이프스타일을 반영해 식생활 전반을 관리해드립니다.  
            </div>
            <ul>
                <li>재료 기반 음식 추천</li>
                입력한 식재료를 바탕으로 조리가 가능한 메뉴 3가지를 추천해드립니다. 각 메뉴의 레시피 링크도 함께 제공됩니다.
                <li>비건식당 검색 기능</li>
                지역별 비건식당 정보를 제공합니다.
                <li>식단 기록</li>
                음식명을 직접 검색하거나, 해당 이미지의 음식을 등록하면 적절한 영양성분 정보를 제공합니다.
                사용자는 식사일, 식사시간, 식사량만 기입해 식단 기록이 가능합니다.
                <li>식습관 분석 및 해결방안 제시</li>
                최근 7일간 기록된 식단을 기반으로 식습관을 분석합니다. 
                분석결과 발견된 문제점을 제시하고, 문제 해결에 도움을 줄 수 있는 메뉴를 문제당 3가지씩 제안합니다.
                <li>채식인 커뮤니티 운영</li>
                채식인들을 위한 공간으로 '채숲'에서 다른 채식인들과 소통할 수 있습니다.
            </ul>
        </Container>
    )
}

const Container = styled.div`
    width: 66rem;
    font-size: 1.4rem;
    padding: 4rem;
    background-color: #fff;
    height: 100%;
`;

const ImageFrame = styled.div`
    display: grid;
    grid-template-columns: repeat(3, auto);
    column-gap: 0.5rem;

    img{
        width: 100%;
        height: 30rem;
    }
`;

export default Landing;