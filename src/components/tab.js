import React from 'react'

import { Tabs } from 'antd';
import popularDestinations from "../components/popularDestinations";
import DestinationCard from "../components/DestinationCard";
import CarouselCard from "../components/CarouselCard";


export default function Tab (){

    return (

<Tabs defaultActiveKey='tab2'>
    <Tabs.TabPane tab="Top Countries to Visit" key="tab1">
        <div>
        <div className="">
        <CarouselCard/>
        </div>
        </div>
    </Tabs.TabPane>

    <Tabs.TabPane tab={ 
        <div className='text-lg'>
            Top Destination
        </div>
    } key="tab2">
        <div>      
        <div className="mt-6 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {popularDestinations.map((dest) => (
            <DestinationCard dest={dest} key={dest.city} />
          ))}
        </div>
            
             </div>
    </Tabs.TabPane>

    
</Tabs>


    );
}