import './Testimon.css'
import {useState, useEffect, Children, cloneElement} from 'react'
import { CiSquareChevLeft , CiSquareChevRight} from "react-icons/ci";

const PAGE_WIDTH =1200;

export const Carousel = ({children}) => {

    const [pages, setPages]= useState([]);
    const [offset, setOffset]=useState([])
    const [currentPage, setCurrentPage] = useState(0);

    const handRightArrow = () => {
        setOffset((currentOffset)=>{
            const newOffset = currentOffset - PAGE_WIDTH
            const maxOffer =-(PAGE_WIDTH * (pages.length - 1))
            return Math.max(newOffset,maxOffer)
        });
        setCurrentPage((currentPage) => Math.min(currentPage + 1, pages.length - 1));
    };

    const handleLeftArrow = () => {
        setOffset((currentOffset) => {
            const newOffset = currentOffset + PAGE_WIDTH;
            return Math.min(newOffset, 0);
        });
        setCurrentPage((currentPage) => Math.max(currentPage - 1, 0));
    };


    useEffect(()=>{
        setPages(
            Children.map(children, child => {
                return cloneElement(child, {
                    style:{
                        height:'100%',
                        minWidth: `${PAGE_WIDTH}px`,
                        maxWidth: `${PAGE_WIDTH}px`,
                    },
                })
            })
        )
    }, [children])


    return(
    <div className='mainWin_Test' style={{ height: '800px', display: 'flex', flexFlow: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <div className='but_ton'>
            <div ><h1>Testimonials</h1></div>
            <div className='button_left_right'>
                <CiSquareChevLeft  className='arrow' onClick={handleLeftArrow}/>
                <CiSquareChevRight className='arrow' onClick={handRightArrow}/>
            </div>
       </div>
       <div className="main_containers">
            <div className="window_page">
                <div className="all_pages_container" style={{transform:`translateX(${offset}px)`}}>
                    {pages}
                </div>
            </div>
        </div> 
        <div className='point'>
            {pages.map((_, index) => (
                <span key={index} style={{ color: index === currentPage ? 'white' : 'gray', fontSize: '30px' }}>•</span>
            ))}
        </div>
    </div>
    )
}