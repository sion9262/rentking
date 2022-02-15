import React from 'react'
import './TopBar.css'

function TopBar() {
  return (
    <div>
        <div className='top-bar'>
            <table className='top-bar-table'>
                <tbody className='t-body'>
                    <tr>
                        <td align='left' className='td-left'>
                            <span>즐겨찾기</span>
                            <span>이용안내</span>
                            <span>매물관리 바로가기</span>
                        </td>
                        <td align='right' className='td-right'>
                            <span>로그인</span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default TopBar