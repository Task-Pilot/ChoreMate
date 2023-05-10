import { DataTypes, Model, ModelStatic, Sequelize } from "sequelize";

interface HouseAttributes {
  houseName: string;
  accountHolderEmail: string;
  garbageDate: Date;
  recycleDate: Date;
}

export interface HouseInstance extends Model<HouseAttributes>, HouseAttributes {}
//export { HouseInstance };

export default function defineHouseInfo(sequelize: Sequelize): ModelStatic<HouseInstance> {
  const HouseInfo = sequelize.define<HouseInstance>("houseInfo", {
    houseName: {
        type: DataTypes.STRING
    },
    accountHolderEmail: {
        type: DataTypes.STRING
    },
    garbageDate: {
        type: DataTypes.DATE
    },
    recycleDate: {
        type: DataTypes.DATE
    }
  });

  return HouseInfo;
}
