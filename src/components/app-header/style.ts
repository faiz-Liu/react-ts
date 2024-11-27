import styled from 'styled-components';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import spriteImg from '@/assets/img/sprite_01.png';

export const HeaderWrapper = styled.div`
    height: 75px;
    background-color: #242424;
    font-size: 14px;
    color: #fff;

    .content {
        display: flex;
        justify-content: space-between;
    }

    .divider {
        height: 5px;
        background-color: #c20c0c;
    }
`;
export const HeaderLeft = styled.div`
    display: flex;

    .logo {
        display: block;
        width: 176px;
        height: 70px;
        background-position: 0 0;
        text-indent: -99999px;
    }

    .title-list {
        display: flex;
        line-height: 70px;

        .item {
            position: relative;

            a {
                display: block;
                padding: 0 20px;
                color: #ccc;
            }

            &:last-of-type a {
                position: relative;

                &::after {
                    position: absolute;
                    content: '';
                    width: 28px;
                    height: 19px;
                    background-position: -190px 0;
                    background-image: url(${spriteImg});
                    top: 20px;
                    right: -15px;
                }
            }

            &:hover a,
            .active {
                color: #fff;
                background: #000;
                text-decoration: none;
            }

            .active .icon {
                position: absolute;
                display: inline-block;
                width: 12px;
                height: 7px;
                bottom: -1px;
                left: 50%;
                transform: translate(-50%, 0);
                background-position: -226px 0;
            }
        }
    }
`;
export const HeaderRight = styled.div`
    display: flex;
    align-items: center;
    color: #787878;
    font-size: 12px;

    .search {
        width: 158px;
        height: 32px;
        border-radius: 16px;

        input {
            &::placeholder {
                font-size: 12px;
            }
        }

        .anticon {
            color: #999999;
            font-size: 20px;
        }
    }

    .center {
        width: 90px;
        height: 32px;
        line-height: 32px;
        text-align: center;
        border: 1px solid #666;
        border-radius: 16px;
        margin: 0 16px;
        color: #989898;
        cursor: pointer;

        &:hover {
            border-color: #fff;
            color: #fff;
        }
    }

    .login {
        cursor: pointer;

        &:hover {
            color: #999;
        }
    }
`;
