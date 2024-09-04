import {addRealTimeMethodsBasedOnSupabase} from 'react-admin/ra-realtime'
import { dataProvider } from './dataProvider'
import { supabaseClient } from './supabase'

export const realTimeDataProvider = addRealTimeMethodsBasedOnSupabase({
    dataProvider,
    supabaseClient
})