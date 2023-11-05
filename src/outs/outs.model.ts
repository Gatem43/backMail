import {  Column, Model , Table , DataType } from "sequelize-typescript";

@Table({tableName: 'outs'})
export class Outs extends Model<Outs> {
    @Column({ type: DataType.INTEGER , unique: true , autoIncrement: true , primaryKey: true })
    id: number;

    @Column({ type: DataType.STRING , allowNull: false})
    name: string;

    @Column({ type: DataType.STRING , allowNull: false})
    description: string;

    @Column({ type: DataType.STRING , allowNull: false})
    data: string;

    @Column({ type: DataType.STRING , allowNull: false})
    author: string;
}