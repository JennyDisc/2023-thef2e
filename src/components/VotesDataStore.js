// 取出 Pinia 裡的 defineStore 方法
import { defineStore } from 'pinia'

// useSelectVoteStore 是自行定義 Pinia store 的函數，之後可以通過調用它來取得 store 實例
// 寫法1
export const useSelectVoteStore = defineStore({
    // id 是定義 Store 名稱(唯一性)
    id: 'myStore',
    state: () => ({
        clickCity: {
            adminCity: '',
            effectiveVotes: 0,
            partisanGroup1: 0,
            partisanGroup2: 0,
            partisanGroup3: 0,
            partisanGroup1Rate: 0,
            partisanGroup2Rate: 0,
            partisanGroup3Rate: 0
        },
        clickCounty: {
            adminCity: '',
            effectiveVotes: 0,
            partisanGroup1: 0,
            partisanGroup2: 0,
            partisanGroup3: 0,
            partisanGroup1Rate: 0,
            partisanGroup2Rate: 0,
            partisanGroup3Rate: 0
        },
        clickTownship: {
            adminCity: '',
            effectiveVotes: 0,
            partisanGroup1: 0,
            partisanGroup2: 0,
            partisanGroup3: 0,
            partisanGroup1Rate: 0,
            partisanGroup2Rate: 0,
            partisanGroup3Rate: 0
        }
    }),
    // actions 概念同 Vue 的 methods
    // 透過呼叫將資料存到 state 中，所以 actions 可以用來更新 state 資料的方法
    actions: {
        updateClickCity(data) {
            // 展開運算子(一次性更新多個屬性)
            this.clickCity = { ...this.clickCity, ...data };
        },
        updateClickCounty(data) {
            // 展開運算子(一次性更新多個屬性)
            this.clickCounty = { ...this.clickCounty, ...data };
        },
        updateClickTownship(data) {
            // 展開運算子(一次性更新多個屬性)
            this.clickTownship = { ...this.clickTownship, ...data };
        },
    },
})