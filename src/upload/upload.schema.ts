// src/upload/upload.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ collection: 'notification-alert' })
export class UploadDocument {
  @Prop({ type: String })
  col_idnum: string;

  @Prop({ type: String })
  col_title: string;

  @Prop({ type: String })
  col_enabled: string;

  @Prop({ type: String })
  col_notification_days: string;

  @Prop({ type: String })
  col_notification_type: string;

  @Prop({ type: Date })
  col_createdate: Date;

  @Prop({ type: Date })
  col_editdate: Date;

  @Prop({ type: String })
  col_staff_username: string;

  @Prop({ type: Date })
  col_inactivedate: Date;

  @Prop({ type: String })
  col_email: string;

  @Prop({ type: String })
  col_target_ind: string;

  @Prop({ type: String })
  col_optouttype: string;

  @Prop({ type: String })
  col_name: string;

  @Prop({ type: String })
  col_businessruledesc: string;

  @Prop({ type: String })
  col_bodytext: string;

  @Prop({ type: String })
  col_alerttype: string;

  @Prop({ type: String })
  col_recipienttype: string;

  @Prop({ type: String })
  col_alertcategory: string;

  @Prop({ type: String })
  col_isdeliverymessagectr: string;

  @Prop({ type: String })
  col_isdeliveryemail: string;

  @Prop({ type: String })
  col_isdeliverytextmessage: string;

  @Prop({ type: String })
  col_isdeliverytextnotification: string;

  @Prop({ type: String })
  col_ismassmail: string;

  @Prop({ type: String })
  col_isfax: string;

  @Prop({ type: String })
  col_savetopdf: string;

  @Prop({ type: String })
  col_recipientdesc: string;

  @Prop({ type: String })
  col_fromemailaddress: string;

  @Prop({ type: String })
  col_isnightlyprocess: string;

  @Prop({ type: String })
  col_bodytextoriginal: string;

  @Prop({ type: String })
  col_isdeliverymessagectrwithemailnotif: string;

  @Prop({ type: String })
  col_auto_reset: string;

  @Prop({ type: String })
  col_ismailrequired: string;

  @Prop({ type: String })
  col_dvop_recipient: string;

  @Prop({ type: String })
  col_isdeliverypreferred: string;

  @Prop({ type: String })
  col_has_ssn: string;

  @Prop({ type: String })
  col_msgtype: string;

  @Prop({ type: String })
  col_suspend_alert: string;

  @Prop({ type: String })
  col_bodytext_S: string;

  @Prop({ type: String })
  col_bodytext_H: string;

  @Prop({ type: Number, default: 0 })
  __v: number;
}

export const UploadDocumentSchema =
  SchemaFactory.createForClass(UploadDocument);
