/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateTaskDto } from '../models/CreateTaskDto';
import type { UpdateTaskDto } from '../models/UpdateTaskDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class TasksService {
    /**
     * Obtiene todas las tareas
     * @returns any Retorna todas las tareas
     * @throws ApiError
     */
    public static tasksControllerGetTasks(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/tasks',
            errors: {
                500: `Error interno del servidor`,
            },
        });
    }
    /**
     * Crea una nueva tarea
     * @param requestBody
     * @returns any Tarea creada exitosamente
     * @throws ApiError
     */
    public static tasksControllerCreateTask(
        requestBody: CreateTaskDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/tasks',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                500: `Error interno del servidor`,
            },
        });
    }
    /**
     * Obtiene una tarea por su ID
     * @param id
     * @returns any Retorna toda la tarea por su ID
     * @throws ApiError
     */
    public static tasksControllerGetTask(
        id: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/tasks/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Tarea no encontrada`,
                500: `Error interno del servidor`,
            },
        });
    }
    /**
     * Actualiza una tarea por su ID
     * @param id
     * @param requestBody
     * @returns any Tarea actualizada exitosamente
     * @throws ApiError
     */
    public static tasksControllerUpdateTask(
        id: number,
        requestBody: UpdateTaskDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/tasks/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Tarea no encontrada`,
                500: `Error interno del servidor`,
            },
        });
    }
    /**
     * Elimina una tarea por su ID
     * @param id
     * @returns any Tarea eliminada exitosamente
     * @throws ApiError
     */
    public static tasksControllerDeleteTask(
        id: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/tasks/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Tarea no encontrada`,
                500: `Error interno del servidor`,
            },
        });
    }
}
