import React from 'react';
import Container from '../Share/Container';

const Home = () => {
    return (
        <div>
           <Container>

   <h1 className='text-[#878FA7] text-[20px] font-normal'>Dashboard</h1>

     {/* 4 boxs */}

      <div className='grid grid-cols-4 gap-10 my-4'>

    {/* box-1 */}

    <div className='w-[230px] h-[110px] bg-[#FFF] rounded-lg'>

          <div className='flex p-4 items-center  gap-4'>
               
          <svg width="70" height="86" viewBox="0 0 86 86" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="86" height="86" rx="11" fill="#E6F7F8"/>
<path d="M52.3097 67.9998C51.5873 67.9989 50.8906 67.7317 50.3527 67.2494C49.8148 66.7671 49.4735 66.1035 49.394 65.3854C49.2196 63.9453 48.5239 62.619 47.4383 61.6569C46.3527 60.6948 44.9524 60.1636 43.502 60.1636C42.0515 60.1636 40.6512 60.6948 39.5656 61.6569C38.48 62.619 37.7843 63.9453 37.6099 65.3854C37.5242 66.1598 37.1344 66.8685 36.5263 67.3554C35.9182 67.8424 35.1415 68.0679 34.3672 67.9822C33.5929 67.8965 32.8843 67.5067 32.3973 66.8985C31.9104 66.2903 31.685 65.5136 31.7707 64.7392C32.1038 61.8612 33.483 59.206 35.646 57.2787C37.8091 55.3515 40.605 54.2865 43.502 54.2865C46.3989 54.2865 49.1948 55.3515 51.3579 57.2787C53.5209 59.206 54.9001 61.8612 55.2332 64.7392C55.2757 65.1226 55.2422 65.5107 55.1347 65.8812C55.0272 66.2517 54.8478 66.5974 54.6066 66.8985C54.3655 67.1997 54.0675 67.4504 53.7295 67.6363C53.3915 67.8222 53.0202 67.9398 52.6367 67.9822C52.5281 67.9939 52.419 67.9998 52.3097 67.9998ZM64.3856 50.3572C64.7691 50.3148 65.1404 50.1973 65.4784 50.0114C65.8164 49.8254 66.1144 49.5748 66.3555 49.2736C66.5967 48.9725 66.7761 48.6268 66.8836 48.2563C66.9911 47.8858 67.0246 47.4977 66.9822 47.1143C66.7583 44.3655 65.5445 41.7913 63.5663 39.8699C61.5881 37.9484 58.9799 36.8102 56.226 36.6666C55.447 36.6666 54.6999 36.9761 54.1491 37.527C53.5983 38.0779 53.2888 38.825 53.2888 39.6041C53.2888 40.3832 53.5983 41.1303 54.1491 41.6812C54.6999 42.2321 55.447 42.5416 56.226 42.5416C57.5296 42.6906 58.7382 43.2965 59.6375 44.2519C60.5369 45.2072 61.0688 46.4503 61.139 47.7605C61.2186 48.4793 61.5604 49.1434 62.0991 49.6258C62.6378 50.1082 63.3355 50.3749 64.0586 50.3749C64.1666 50.3747 64.2744 50.3688 64.3817 50.3572H64.3856ZM25.8571 47.7605C25.9272 46.4503 26.4592 45.2072 27.3585 44.2519C28.2579 43.2965 29.4665 42.6906 30.7701 42.5416C31.5491 42.5416 32.2962 42.2321 32.847 41.6812C33.3978 41.1303 33.7073 40.3832 33.7073 39.6041C33.7073 38.825 33.3978 38.0779 32.847 37.527C32.2962 36.9761 31.5491 36.6666 30.7701 36.6666C28.0168 36.8111 25.4096 37.9498 23.4322 39.8711C21.4548 41.7925 20.2416 44.3661 20.0178 47.1143C19.9754 47.4977 20.0089 47.8858 20.1164 48.2563C20.2239 48.6268 20.4033 48.9725 20.6444 49.2736C20.8856 49.5748 21.1836 49.8254 21.5216 50.0114C21.8596 50.1973 22.2309 50.3148 22.6144 50.3572C22.7217 50.3688 22.8295 50.3747 22.9374 50.3749C23.6605 50.3749 24.3582 50.1082 24.8969 49.6258C25.4357 49.1434 25.7775 48.4793 25.8571 47.7605ZM43.6488 52.3332C45.0043 52.3332 46.3294 51.9312 47.4564 51.1781C48.5835 50.4249 49.4619 49.3545 49.9807 48.102C50.4994 46.8496 50.6351 45.4715 50.3707 44.1419C50.1062 42.8123 49.4535 41.591 48.495 40.6325C47.5365 39.6739 46.3153 39.0211 44.9859 38.7566C43.6564 38.4922 42.2784 38.6279 41.0261 39.1467C39.7738 39.6654 38.7034 40.5439 37.9503 41.6711C37.1972 42.7983 36.7953 44.1234 36.7953 45.4791C36.7953 47.2969 37.5174 49.0403 38.8026 50.3257C40.0879 51.6111 41.8311 52.3332 43.6488 52.3332ZM55.3977 34.7083C56.7532 34.7083 58.0783 34.3063 59.2053 33.5531C60.3324 32.8 61.2108 31.7295 61.7296 30.4771C62.2483 29.2247 62.384 27.8465 62.1196 26.517C61.8551 25.1874 61.2024 23.9661 60.2439 23.0075C59.2854 22.049 58.0642 21.3962 56.7348 21.1317C55.4053 20.8672 54.0273 21.003 52.775 21.5217C51.5227 22.0405 50.4523 22.919 49.6992 24.0462C48.9462 25.1733 48.5442 26.4985 48.5442 27.8541C48.5442 28.7542 48.7215 29.6455 49.0659 30.4771C49.4103 31.3087 49.9151 32.0643 50.5515 32.7007C51.188 33.3372 51.9435 33.8421 52.775 34.1865C53.6065 34.531 54.4977 34.7083 55.3977 34.7083ZM31.8999 34.7083C33.2554 34.7083 34.5805 34.3063 35.7075 33.5531C36.8346 32.8 37.713 31.7295 38.2317 30.4771C38.7505 29.2247 38.8862 27.8465 38.6217 26.517C38.3573 25.1874 37.7046 23.9661 36.7461 23.0075C35.7876 22.049 34.5664 21.3962 33.237 21.1317C31.9075 20.8672 30.5295 21.003 29.2772 21.5217C28.0249 22.0405 26.9545 22.919 26.2014 24.0462C25.4483 25.1733 25.0464 26.4985 25.0464 27.8541C25.0464 29.672 25.7684 31.4153 27.0537 32.7007C27.6901 33.3372 28.4457 33.8421 29.2772 34.1865C30.1087 34.531 30.9999 34.7083 31.8999 34.7083Z" fill="#00AFB9"/>
</svg>

  <div className='flex flex-col gap-1 '>
    <h1 className='text-[#444] text-[30px] font-semibold'>14,493</h1>
    <p className='text-[#ABABAB] text-[18px] font-normal'>Volunteers</p>
  </div>


          </div>

    </div>




{/* box-2 */}

<div className='w-[230px] h-[110px] bg-[#FFF] rounded-lg'>

<div className='flex p-4 items-center  gap-4'>
     
<svg width="70" height="86" viewBox="0 0 86 86" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="86" height="86" rx="11" fill="#FFF3E6"/>
<path d="M61.1188 46.5157V46.4158C61.1188 44.2558 59.3603 42.4993 57.198 42.4993H51.3168C49.1545 42.4993 47.396 44.2558 47.396 46.4158V46.5157C44.079 46.9954 41.5148 49.8271 41.5148 53.2697V59.1446C41.5148 62.924 44.5927 65.9985 48.3762 65.9985H60.1386C63.9222 65.9985 67 62.924 67 59.1446V53.2697C67 49.8271 64.4358 46.9954 61.1188 46.5157ZM61.1188 59.1446C61.1188 59.685 60.6797 60.1237 60.1386 60.1237H48.3762C47.8352 60.1237 47.396 59.685 47.396 59.1446V53.2697C47.396 52.7293 47.8352 52.2906 48.3762 52.2906H51.3168V53.2697C51.3168 54.8931 52.6322 56.2071 54.2574 56.2071C55.8826 56.2071 57.198 54.8931 57.198 53.2697V52.2906H60.1386C60.6797 52.2906 61.1188 52.7293 61.1188 53.2697V59.1446ZM37.594 42.4993C44.081 42.4993 49.3564 37.2295 49.3564 30.7496C49.3564 24.2697 44.081 19 37.594 19C31.1071 19 25.8317 24.2697 25.8317 30.7496C25.8317 37.2295 31.1071 42.4993 37.594 42.4993ZM37.594 24.8748C40.8365 24.8748 43.4752 27.5106 43.4752 30.7496C43.4752 33.9886 40.8365 36.6244 37.594 36.6244C34.3515 36.6244 31.7128 33.9886 31.7128 30.7496C31.7128 27.5106 34.3515 24.8748 37.594 24.8748ZM37.5352 48.7677C37.8587 50.3578 36.8314 51.9087 35.2396 52.2319C30.1681 53.2619 26.2296 57.8991 25.8748 63.255C25.7728 64.8079 24.479 65.9985 22.944 65.9985C20.9895 66.0553 19.8995 64.4867 20.0073 62.8672C20.5327 54.9147 26.4453 48.0216 34.0673 46.4745C35.6572 46.1553 37.2118 47.1776 37.5352 48.7677Z" fill="#FF8700"/>
</svg>


<div className='flex flex-col gap-1 '>
<h1 className='text-[#444] text-[30px] font-semibold'>376</h1>
<p className='text-[#ABABAB] text-[18px] font-normal'>Staffs</p>
</div>


</div>

</div>



{/* box-3 */}

<div className='w-[230px] h-[110px] bg-[#FFF] rounded-lg'>

<div className='flex p-4 items-center  gap-4'>
     
<svg width="70" height="86" viewBox="0 0 86 86" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="86" height="86" rx="11" fill="#FFEDF0"/>
<path d="M66.5282 34.6478C65.0238 33.2789 63.0708 32.5838 61.0493 32.6738C59.02 32.7678 57.1493 33.6491 55.7801 35.151L51.0044 40.3972C50.8614 40.2679 50.6969 40.1661 50.5441 40.0486C51.0632 39.0049 51.3825 37.8456 51.3825 36.6041C51.3825 30.3533 46.5265 24.4139 40.8694 23.1352C41.8214 22.2462 42.8459 21.0418 43.4316 19.534C43.9135 18.2944 42.8243 17 41.4042 17H36.0742C34.5385 17 33.469 18.4883 34.1369 19.7709C34.8049 21.0497 35.7941 22.2011 36.6814 23.0902C30.9186 24.2475 25.9177 30.2632 25.9177 36.606C25.9177 37.7007 26.1488 38.7386 26.5582 39.6863C23.855 41.1922 22 44.0474 22 47.3549V55.1879C22 60.0463 25.9549 64 30.8147 64H41.4199C47.3532 64 52.9966 61.4386 56.9025 56.9718L67.0806 45.3339C69.8425 42.2379 69.5937 37.4481 66.5282 34.6517V34.6478ZM38.6501 28.7476C41.9174 28.7476 45.506 32.8599 45.506 36.6041C45.506 37.6713 44.6284 38.5388 43.5471 38.5388H33.753C32.6717 38.5388 31.7942 37.6713 31.7942 36.6041C31.7942 32.8599 35.3827 28.7476 38.6501 28.7476ZM62.6791 41.4409L52.4814 53.1023C49.69 56.2923 45.6607 58.1213 41.4218 58.1213H30.8167C29.1967 58.1213 27.8785 56.8034 27.8785 55.1839V47.3509C27.8785 45.7315 29.1967 44.4136 30.8167 44.4136H46.2072C46.9007 44.4136 47.4668 44.9775 47.4668 45.6708C47.4668 46.2915 47.0025 46.8281 46.3875 46.9162L36.2779 48.3594C34.6717 48.5886 33.5532 50.0768 33.7843 51.6826C34.0155 53.2884 35.5061 54.3967 37.1085 54.1754L47.22 52.7322C50.3893 52.2799 52.8516 49.7341 53.2786 46.6323L60.1287 39.1067C60.4401 38.764 60.8652 38.5643 61.3275 38.5427C61.78 38.5192 62.2344 38.6818 62.5733 38.9912C63.2706 39.6276 63.3274 40.7164 62.681 41.4429L62.6791 41.4409Z" fill="#FF4D6D"/>
</svg>


<div className='flex flex-col gap-1 '>
<h1 className='text-[#444] text-[30px] font-semibold'>0</h1>
<p className='text-[#ABABAB] text-[18px] font-normal'>Beneficiary</p>
</div>


</div>

</div>





{/* box-4 */}

<div className='w-[230px] h-[110px] bg-[#FFF] rounded-lg'>

<div className='flex p-4 items-center  gap-4'>
    
<svg width="70" height="" viewBox="0 0 86 86" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="86" height="86" rx="11" fill="#D2F8EA"/>
<path d="M61.125 49.375H55.25C53.6919 49.375 52.1975 49.994 51.0957 51.0957C49.994 52.1975 49.375 53.6919 49.375 55.25V61.125H28.8125C28.0334 61.125 27.2863 60.8155 26.7354 60.2646C26.1845 59.7137 25.875 58.9666 25.875 58.1875V28.8125C25.875 28.0334 26.1845 27.2863 26.7354 26.7354C27.2863 26.1845 28.0334 25.875 28.8125 25.875H48.3958C49.1749 25.875 49.9221 25.5655 50.473 25.0146C51.0238 24.4637 51.3333 23.7166 51.3333 22.9375C51.3333 22.1584 51.0238 21.4113 50.473 20.8604C49.9221 20.3095 49.1749 20 48.3958 20H28.8125C26.4753 20 24.2338 20.9285 22.5811 22.5811C20.9285 24.2338 20 26.4753 20 28.8125V58.1875C20 60.5247 20.9285 62.7662 22.5811 64.4189C24.2338 66.0715 26.4753 67 28.8125 67H52.2831C54.6197 66.9995 56.8604 66.0711 58.5126 64.4189L64.4189 58.5126C66.0711 56.8604 66.9995 54.6197 67 52.2831V42.5326C67 41.7535 66.6905 41.0063 66.1396 40.4555C65.5887 39.9046 64.8416 39.5951 64.0625 39.5951C63.2834 39.5951 62.5363 39.9046 61.9854 40.4555C61.4345 41.0063 61.125 41.7535 61.125 42.5326V49.375Z" fill="#00C178"/>
<path d="M61.0524 21.9584C60.2687 21.9814 59.4977 22.1634 58.7864 22.4933C58.0751 22.8232 57.4382 23.2941 56.9144 23.8776L40.9814 41.6847C42.7702 41.9455 44.4512 42.6982 45.8372 43.8587C47.2231 45.0191 48.2594 46.5418 48.8304 48.2569L65.2804 31.8069C66.36 30.725 66.9662 29.259 66.9662 27.7306C66.9662 26.2022 66.36 24.7363 65.2804 23.6543C64.7251 23.1031 64.0647 22.6689 63.3384 22.3776C62.6122 22.0863 61.8348 21.9437 61.0524 21.9584Z" fill="#00C178"/>
<path d="M38.1891 45.5895C33.6516 46.4629 31.4035 51.5154 30.4282 54.6644C30.3362 54.9579 30.3147 55.269 30.3653 55.5724C30.416 55.8758 30.5374 56.163 30.7197 56.4107C30.902 56.6584 31.1402 56.8597 31.4148 56.9983C31.6894 57.1369 31.9928 57.2088 32.3004 57.2083H39.5834C40.4003 57.2084 41.2082 57.0382 41.9555 56.7086C42.7029 56.3789 43.3733 55.897 43.9239 55.2937C44.4746 54.6903 44.8934 53.9788 45.1535 53.2045C45.4137 52.4302 45.5095 51.6101 45.4349 50.7967C45.3308 49.9655 45.0563 49.1649 44.6284 48.4448C44.2005 47.7247 43.6286 47.1006 42.9484 46.6118C42.2682 46.123 41.4944 45.7799 40.6754 45.604C39.8565 45.428 39.01 45.4231 38.1891 45.5895Z" fill="#00C178"/>
</svg>


<div className='flex flex-col gap-1 '>
<h1 className='text-[#444] text-[30px] font-semibold'>27</h1>
<p className='text-[#ABABAB] text-[18px] font-normal'>Projects</p>
</div>


</div>

</div>








      </div>

           </Container>
        </div>
    );
};

export default Home;