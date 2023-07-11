import { ITable } from '@/common/models/ITable'
import { ITableColumn } from '@/common/models/ITableColumn'
import { ITask } from '@/common/models/ITask'
import { generateUniqueId, removeItemFromArray } from '@/common/utils'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import tableDataBase from '@/common/data/data.json'

interface IState {
  tables: ITable[]
  selectedTableIndex?: number
}

const initialState: IState = {
  tables: tableDataBase,
}

const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    updateSelectedTableIndex(
      state,
      { payload }: PayloadAction<{ tableIndex?: number }>
    ) {
      state.selectedTableIndex = payload.tableIndex
    },

    addTable({ tables }, { payload }: PayloadAction<ITable>) {
      tables.push(payload)
    },
    updateTable(
      { tables },
      {
        payload,
      }: PayloadAction<{
        index: number
        newTable: ITable
      }>
    ) {
      const { index, newTable } = payload
      tables[index] = newTable
    },
    deleteTable({ tables }, { payload }: PayloadAction<number>) {
      tables.splice(payload, 1)
    },

    addTableColumn(
      { tables },
      {
        payload,
      }: PayloadAction<{
        tableIndex: number
        table: Omit<ITableColumn, 'id'>
      }>
    ) {
      const { tableIndex, table } = payload
      tables[tableIndex].columns.push({
        id: generateUniqueId('column'),
        ...table,
      })
    },
    updateTableColumn(
      { tables },
      {
        payload,
      }: PayloadAction<{
        tableIndex: number
        columnIndex: number
        newColumn: Omit<ITableColumn, 'id'>
      }>
    ) {
      const { tableIndex, columnIndex, newColumn } = payload
      const id = tables[tableIndex].columns[columnIndex].id

      tables[tableIndex].columns[columnIndex] = {
        id,
        ...newColumn,
      }
    },
    deleteTableColumn(
      { tables },
      {
        payload,
      }: PayloadAction<{
        tableIndex: number
        columnIndex: number
      }>
    ) {
      const { tableIndex, columnIndex } = payload
      removeItemFromArray(tables[tableIndex].columns, columnIndex)
    },

    addTask(
      state,
      {
        payload,
      }: PayloadAction<{
        tableIndex: number
        columnIndex: number
        task: ITask
      }>
    ) {
      const { tableIndex, columnIndex, task } = payload
      state.tables[tableIndex].columns[columnIndex].tasks.push(task)
    },
    updateTask(
      { tables },
      {
        payload,
      }: PayloadAction<{
        tableIndex: number
        oldColumnIndex: number
        newColumnIndex: number
        taskIndex: number
        task: ITask
      }>
    ) {
      const { tableIndex, oldColumnIndex, newColumnIndex, taskIndex, task } =
        payload
      const columnIsChanged = oldColumnIndex !== newColumnIndex

      if (columnIsChanged) {
        tables[tableIndex].columns[oldColumnIndex].tasks.splice(taskIndex, 1)
        tables[tableIndex].columns[newColumnIndex].tasks.push(task)
      } else {
        tables[tableIndex].columns[oldColumnIndex].tasks[taskIndex] = task
      }
    },
    deleteTask(
      { tables },
      {
        payload,
      }: PayloadAction<{
        tableIndex: number
        columnIndex: number
        taskIndex: number
      }>
    ) {
      const { tableIndex, columnIndex, taskIndex } = payload
      tables[tableIndex].columns[columnIndex].tasks.splice(taskIndex, 1)
    },
    changeTaskColumn(
      { tables },
      {
        payload,
      }: PayloadAction<{
        tableIndex: number
        oldColumnIndex: number
        newColumnIndex: number
        taskIndex: number
      }>
    ) {
      const { tableIndex, oldColumnIndex, newColumnIndex, taskIndex } = payload

      const task = tables[tableIndex].columns[oldColumnIndex].tasks[taskIndex]

      tables[tableIndex].columns[oldColumnIndex].tasks.splice(taskIndex, 1)
      tables[tableIndex].columns[newColumnIndex].tasks.push(task)
    },

    toggleSubtask(
      { tables },
      {
        payload,
      }: PayloadAction<{
        tableIndex: number
        columnIndex: number
        taskIndex: number
        subtaskIndex: number
      }>
    ) {
      const { tableIndex, columnIndex, taskIndex, subtaskIndex } = payload
      const subtask =
        tables[tableIndex].columns[columnIndex].tasks[taskIndex].subtasks[
          subtaskIndex
        ]
      tables[tableIndex].columns[columnIndex].tasks[taskIndex].subtasks[
        subtaskIndex
      ] = {
        ...subtask,
        doing: !subtask.doing,
      }
    },
  },
})

export const mainActions = mainSlice.actions

export default mainSlice.reducer
