import request from "@/utils/request";

/**
 * 获取用户分页列表
 *
 * @param queryParams
 */
export function listUsersWithPage(queryParams: any) {
    return request({
        url: '/youlai-admin/api/v1/users/page',
        method: 'get',
        params: queryParams
    })
}

/**
 * 获取用户表单详情
 *
 * @param userId
 */
export function getUserFormDetail(userId: any) {
    return request({
        url: '/youlai-admin/api/v1/users/' + userId + '/form_detail',
        method: 'get'
    })
}

/**
 * 添加用户
 *
 * @param data
 */
export function addUser(data: any) {
    return request({
        url: '/youlai-admin/api/v1/users',
        method: 'post',
        data: data
    })
}

/**
 * 修改用户
 *
 * @param id
 * @param data
 */
export function updateUser(id: number, data: any) {
    return request({
        url: '/youlai-admin/api/v1/users/' + id,
        method: 'put',
        data: data
    })
}

/**
 * 选择性修改用户
 *
 * @param id
 * @param data
 */
export function updateUserPart(id: number, data: any) {
    return request({
        url: '/youlai-admin/api/v1/users/' + id,
        method: 'patch',
        data: data
    })
}


/**
 * 删除用户
 * @param ids
 */
export function deleteUsers(ids: number) {
    return request({
        url: '/youlai-admin/api/v1/users/' + ids,
        method: 'delete',
    })
}
