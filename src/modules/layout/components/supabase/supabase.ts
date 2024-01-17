import { createClient } from '@supabase/supabase-js'

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      address: {
        Row: {
          address_1: string | null
          address_2: string | null
          city: string | null
          company: string | null
          country_code: string | null
          created_at: string
          customer_id: string | null
          deleted_at: string | null
          first_name: string | null
          id: string
          last_name: string | null
          metadata: Json | null
          phone: string | null
          postal_code: string | null
          province: string | null
          updated_at: string
        }
        Insert: {
          address_1?: string | null
          address_2?: string | null
          city?: string | null
          company?: string | null
          country_code?: string | null
          created_at?: string
          customer_id?: string | null
          deleted_at?: string | null
          first_name?: string | null
          id: string
          last_name?: string | null
          metadata?: Json | null
          phone?: string | null
          postal_code?: string | null
          province?: string | null
          updated_at?: string
        }
        Update: {
          address_1?: string | null
          address_2?: string | null
          city?: string | null
          company?: string | null
          country_code?: string | null
          created_at?: string
          customer_id?: string | null
          deleted_at?: string | null
          first_name?: string | null
          id?: string
          last_name?: string | null
          metadata?: Json | null
          phone?: string | null
          postal_code?: string | null
          province?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "FK_6df8c6bf969a51d24c1980c4ff4"
            columns: ["country_code"]
            isOneToOne: false
            referencedRelation: "country"
            referencedColumns: ["iso_2"]
          },
          {
            foreignKeyName: "FK_9c9614b2f9d01665800ea8dbff7"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customer"
            referencedColumns: ["id"]
          }
        ]
      }
      analytics_config: {
        Row: {
          anonymize: boolean
          created_at: string
          deleted_at: string | null
          id: string
          opt_out: boolean
          updated_at: string
          user_id: string
        }
        Insert: {
          anonymize?: boolean
          created_at?: string
          deleted_at?: string | null
          id: string
          opt_out?: boolean
          updated_at?: string
          user_id: string
        }
        Update: {
          anonymize?: boolean
          created_at?: string
          deleted_at?: string | null
          id?: string
          opt_out?: boolean
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      batch_job: {
        Row: {
          canceled_at: string | null
          completed_at: string | null
          confirmed_at: string | null
          context: Json | null
          created_at: string
          created_by: string | null
          deleted_at: string | null
          dry_run: boolean
          failed_at: string | null
          id: string
          pre_processed_at: string | null
          processing_at: string | null
          result: Json | null
          type: string
          updated_at: string
        }
        Insert: {
          canceled_at?: string | null
          completed_at?: string | null
          confirmed_at?: string | null
          context?: Json | null
          created_at?: string
          created_by?: string | null
          deleted_at?: string | null
          dry_run?: boolean
          failed_at?: string | null
          id: string
          pre_processed_at?: string | null
          processing_at?: string | null
          result?: Json | null
          type: string
          updated_at?: string
        }
        Update: {
          canceled_at?: string | null
          completed_at?: string | null
          confirmed_at?: string | null
          context?: Json | null
          created_at?: string
          created_by?: string | null
          deleted_at?: string | null
          dry_run?: boolean
          failed_at?: string | null
          id?: string
          pre_processed_at?: string | null
          processing_at?: string | null
          result?: Json | null
          type?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "FK_fa53ca4f5fd90605b532802a626"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "user"
            referencedColumns: ["id"]
          }
        ]
      }
      cart: {
        Row: {
          billing_address_id: string | null
          completed_at: string | null
          context: Json | null
          created_at: string
          customer_id: string | null
          deleted_at: string | null
          email: string | null
          id: string
          idempotency_key: string | null
          metadata: Json | null
          payment_authorized_at: string | null
          payment_id: string | null
          region_id: string
          sales_channel_id: string | null
          shipping_address_id: string | null
          type: Database["public"]["Enums"]["cart_type_enum"]
          updated_at: string
        }
        Insert: {
          billing_address_id?: string | null
          completed_at?: string | null
          context?: Json | null
          created_at?: string
          customer_id?: string | null
          deleted_at?: string | null
          email?: string | null
          id: string
          idempotency_key?: string | null
          metadata?: Json | null
          payment_authorized_at?: string | null
          payment_id?: string | null
          region_id: string
          sales_channel_id?: string | null
          shipping_address_id?: string | null
          type?: Database["public"]["Enums"]["cart_type_enum"]
          updated_at?: string
        }
        Update: {
          billing_address_id?: string | null
          completed_at?: string | null
          context?: Json | null
          created_at?: string
          customer_id?: string | null
          deleted_at?: string | null
          email?: string | null
          id?: string
          idempotency_key?: string | null
          metadata?: Json | null
          payment_authorized_at?: string | null
          payment_id?: string | null
          region_id?: string
          sales_channel_id?: string | null
          shipping_address_id?: string | null
          type?: Database["public"]["Enums"]["cart_type_enum"]
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "FK_242205c81c1152fab1b6e848470"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customer"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "FK_484c329f4783be4e18e5e2ff090"
            columns: ["region_id"]
            isOneToOne: false
            referencedRelation: "region"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "FK_6b9c66b5e36f7c827dfaa092f94"
            columns: ["billing_address_id"]
            isOneToOne: false
            referencedRelation: "address"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "FK_9d1a161434c610aae7c3df2dc7e"
            columns: ["payment_id"]
            isOneToOne: true
            referencedRelation: "payment"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "FK_a2bd3c26f42e754b9249ba78fd6"
            columns: ["sales_channel_id"]
            isOneToOne: false
            referencedRelation: "sales_channel"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "FK_ced15a9a695d2b5db9dabce763d"
            columns: ["shipping_address_id"]
            isOneToOne: false
            referencedRelation: "address"
            referencedColumns: ["id"]
          }
        ]
      }
      cart_discounts: {
        Row: {
          cart_id: string
          discount_id: string
        }
        Insert: {
          cart_id: string
          discount_id: string
        }
        Update: {
          cart_id?: string
          discount_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "FK_6680319ebe1f46d18f106191d59"
            columns: ["cart_id"]
            isOneToOne: false
            referencedRelation: "cart"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "FK_8df75ef4f35f217768dc1135458"
            columns: ["discount_id"]
            isOneToOne: false
            referencedRelation: "discount"
            referencedColumns: ["id"]
          }
        ]
      }
      cart_gift_cards: {
        Row: {
          cart_id: string
          gift_card_id: string
        }
        Insert: {
          cart_id: string
          gift_card_id: string
        }
        Update: {
          cart_id?: string
          gift_card_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "FK_0fb38b6d167793192bc126d835e"
            columns: ["gift_card_id"]
            isOneToOne: false
            referencedRelation: "gift_card"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "FK_d38047a90f3d42f0be7909e8aea"
            columns: ["cart_id"]
            isOneToOne: false
            referencedRelation: "cart"
            referencedColumns: ["id"]
          }
        ]
      }
      claim_image: {
        Row: {
          claim_item_id: string
          created_at: string
          deleted_at: string | null
          id: string
          metadata: Json | null
          updated_at: string
          url: string
        }
        Insert: {
          claim_item_id: string
          created_at?: string
          deleted_at?: string | null
          id: string
          metadata?: Json | null
          updated_at?: string
          url: string
        }
        Update: {
          claim_item_id?: string
          created_at?: string
          deleted_at?: string | null
          id?: string
          metadata?: Json | null
          updated_at?: string
          url?: string
        }
        Relationships: [
          {
            foreignKeyName: "FK_21cbfedd83d736d86f4c6f4ce56"
            columns: ["claim_item_id"]
            isOneToOne: false
            referencedRelation: "claim_item"
            referencedColumns: ["id"]
          }
        ]
      }
      claim_item: {
        Row: {
          claim_order_id: string
          created_at: string
          deleted_at: string | null
          id: string
          item_id: string
          metadata: Json | null
          note: string | null
          quantity: number
          reason: Database["public"]["Enums"]["claim_item_reason_enum"]
          updated_at: string
          variant_id: string
        }
        Insert: {
          claim_order_id: string
          created_at?: string
          deleted_at?: string | null
          id: string
          item_id: string
          metadata?: Json | null
          note?: string | null
          quantity: number
          reason: Database["public"]["Enums"]["claim_item_reason_enum"]
          updated_at?: string
          variant_id: string
        }
        Update: {
          claim_order_id?: string
          created_at?: string
          deleted_at?: string | null
          id?: string
          item_id?: string
          metadata?: Json | null
          note?: string | null
          quantity?: number
          reason?: Database["public"]["Enums"]["claim_item_reason_enum"]
          updated_at?: string
          variant_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "FK_64980511ca32c8e92b417644afa"
            columns: ["variant_id"]
            isOneToOne: false
            referencedRelation: "product_variant"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "FK_6e0cad0daef76bb642675910b9d"
            columns: ["item_id"]
            isOneToOne: false
            referencedRelation: "line_item"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "FK_900a9c3834257304396b2b0fe7c"
            columns: ["claim_order_id"]
            isOneToOne: false
            referencedRelation: "claim_order"
            referencedColumns: ["id"]
          }
        ]
      }
      claim_item_tags: {
        Row: {
          item_id: string
          tag_id: string
        }
        Insert: {
          item_id: string
          tag_id: string
        }
        Update: {
          item_id?: string
          tag_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "FK_c2c0f3edf39515bd15432afe6e5"
            columns: ["item_id"]
            isOneToOne: false
            referencedRelation: "claim_item"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "FK_dc9bbf9fcb9ba458d25d512811b"
            columns: ["tag_id"]
            isOneToOne: false
            referencedRelation: "claim_tag"
            referencedColumns: ["id"]
          }
        ]
      }
      claim_order: {
        Row: {
          canceled_at: string | null
          created_at: string
          deleted_at: string | null
          fulfillment_status: Database["public"]["Enums"]["claim_order_fulfillment_status_enum"]
          id: string
          idempotency_key: string | null
          metadata: Json | null
          no_notification: boolean | null
          order_id: string
          payment_status: Database["public"]["Enums"]["claim_order_payment_status_enum"]
          refund_amount: number | null
          shipping_address_id: string | null
          type: Database["public"]["Enums"]["claim_order_type_enum"]
          updated_at: string
        }
        Insert: {
          canceled_at?: string | null
          created_at?: string
          deleted_at?: string | null
          fulfillment_status?: Database["public"]["Enums"]["claim_order_fulfillment_status_enum"]
          id: string
          idempotency_key?: string | null
          metadata?: Json | null
          no_notification?: boolean | null
          order_id: string
          payment_status?: Database["public"]["Enums"]["claim_order_payment_status_enum"]
          refund_amount?: number | null
          shipping_address_id?: string | null
          type: Database["public"]["Enums"]["claim_order_type_enum"]
          updated_at?: string
        }
        Update: {
          canceled_at?: string | null
          created_at?: string
          deleted_at?: string | null
          fulfillment_status?: Database["public"]["Enums"]["claim_order_fulfillment_status_enum"]
          id?: string
          idempotency_key?: string | null
          metadata?: Json | null
          no_notification?: boolean | null
          order_id?: string
          payment_status?: Database["public"]["Enums"]["claim_order_payment_status_enum"]
          refund_amount?: number | null
          shipping_address_id?: string | null
          type?: Database["public"]["Enums"]["claim_order_type_enum"]
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "FK_017d58bf8260c6e1a2588d258e2"
            columns: ["shipping_address_id"]
            isOneToOne: false
            referencedRelation: "address"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "FK_f49e3974465d3c3a33d449d3f31"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "order"
            referencedColumns: ["id"]
          }
        ]
      }
      claim_tag: {
        Row: {
          created_at: string
          deleted_at: string | null
          id: string
          metadata: Json | null
          updated_at: string
          value: string
        }
        Insert: {
          created_at?: string
          deleted_at?: string | null
          id: string
          metadata?: Json | null
          updated_at?: string
          value: string
        }
        Update: {
          created_at?: string
          deleted_at?: string | null
          id?: string
          metadata?: Json | null
          updated_at?: string
          value?: string
        }
        Relationships: []
      }
      country: {
        Row: {
          display_name: string
          id: number
          iso_2: string
          iso_3: string
          name: string
          num_code: number
          region_id: string | null
        }
        Insert: {
          display_name: string
          id?: number
          iso_2: string
          iso_3: string
          name: string
          num_code: number
          region_id?: string | null
        }
        Update: {
          display_name?: string
          id?: number
          iso_2?: string
          iso_3?: string
          name?: string
          num_code?: number
          region_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "FK_b1aac8314662fa6b25569a575bb"
            columns: ["region_id"]
            isOneToOne: false
            referencedRelation: "region"
            referencedColumns: ["id"]
          }
        ]
      }
      currency: {
        Row: {
          code: string
          name: string
          symbol: string
          symbol_native: string
        }
        Insert: {
          code: string
          name: string
          symbol: string
          symbol_native: string
        }
        Update: {
          code?: string
          name?: string
          symbol?: string
          symbol_native?: string
        }
        Relationships: []
      }
      custom_order: {
        Row: {
          additionalAccessories: string | null
          controlFeatures: string | null
          created_at: string
          customerEmail: string | null
          customerName: string | null
          heaterType: string | null
          id: number
          shippingDetails: string | null
          specialRequirements: string | null
          voltage: string | null
        }
        Insert: {
          additionalAccessories?: string | null
          controlFeatures?: string | null
          created_at?: string
          customerEmail?: string | null
          customerName?: string | null
          heaterType?: string | null
          id?: number
          shippingDetails?: string | null
          specialRequirements?: string | null
          voltage?: string | null
        }
        Update: {
          additionalaccessories?: string | null
          controlfeatures?: string | null
          created_at?: string
          customeremail?: string | null
          customername?: string | null
          heatertype?: string | null
          id?: number
          shippingdetails?: string | null
          specialrequirements?: string | null
          voltage?: string | null
        }
        Relationships: []
      }
      custom_shipping_option: {
        Row: {
          cart_id: string | null
          created_at: string
          deleted_at: string | null
          id: string
          metadata: Json | null
          price: number
          shipping_option_id: string
          updated_at: string
        }
        Insert: {
          cart_id?: string | null
          created_at?: string
          deleted_at?: string | null
          id: string
          metadata?: Json | null
          price: number
          shipping_option_id: string
          updated_at?: string
        }
        Update: {
          cart_id?: string | null
          created_at?: string
          deleted_at?: string | null
          id?: string
          metadata?: Json | null
          price?: number
          shipping_option_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "FK_44090cb11b06174cbcc667e91ca"
            columns: ["shipping_option_id"]
            isOneToOne: false
            referencedRelation: "shipping_option"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "FK_93caeb1bb70d37c1d36d6701a7a"
            columns: ["cart_id"]
            isOneToOne: false
            referencedRelation: "cart"
            referencedColumns: ["id"]
          }
        ]
      }
      customer: {
        Row: {
          billing_address_id: string | null
          created_at: string
          deleted_at: string | null
          email: string
          first_name: string | null
          has_account: boolean
          id: string
          last_name: string | null
          metadata: Json | null
          password_hash: string | null
          phone: string | null
          updated_at: string
        }
        Insert: {
          billing_address_id?: string | null
          created_at?: string
          deleted_at?: string | null
          email: string
          first_name?: string | null
          has_account?: boolean
          id: string
          last_name?: string | null
          metadata?: Json | null
          password_hash?: string | null
          phone?: string | null
          updated_at?: string
        }
        Update: {
          billing_address_id?: string | null
          created_at?: string
          deleted_at?: string | null
          email?: string
          first_name?: string | null
          has_account?: boolean
          id?: string
          last_name?: string | null
          metadata?: Json | null
          password_hash?: string | null
          phone?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "FK_8abe81b9aac151ae60bf507ad15"
            columns: ["billing_address_id"]
            isOneToOne: true
            referencedRelation: "address"
            referencedColumns: ["id"]
          }
        ]
      }
      customer_group: {
        Row: {
          created_at: string
          deleted_at: string | null
          id: string
          metadata: Json | null
          name: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          deleted_at?: string | null
          id: string
          metadata?: Json | null
          name: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          deleted_at?: string | null
          id?: string
          metadata?: Json | null
          name?: string
          updated_at?: string
        }
        Relationships: []
      }
      customer_group_customers: {
        Row: {
          customer_group_id: string
          customer_id: string
        }
        Insert: {
          customer_group_id: string
          customer_id: string
        }
        Update: {
          customer_group_id?: string
          customer_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "FK_3c6412d076292f439269abe1a23"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customer"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "FK_620330964db8d2999e67b0dbe3e"
            columns: ["customer_group_id"]
            isOneToOne: false
            referencedRelation: "customer_group"
            referencedColumns: ["id"]
          }
        ]
      }
      discount: {
        Row: {
          code: string
          created_at: string
          deleted_at: string | null
          ends_at: string | null
          id: string
          is_disabled: boolean
          is_dynamic: boolean
          metadata: Json | null
          parent_discount_id: string | null
          rule_id: string | null
          starts_at: string
          updated_at: string
          usage_count: number
          usage_limit: number | null
          valid_duration: string | null
        }
        Insert: {
          code: string
          created_at?: string
          deleted_at?: string | null
          ends_at?: string | null
          id: string
          is_disabled: boolean
          is_dynamic: boolean
          metadata?: Json | null
          parent_discount_id?: string | null
          rule_id?: string | null
          starts_at?: string
          updated_at?: string
          usage_count?: number
          usage_limit?: number | null
          valid_duration?: string | null
        }
        Update: {
          code?: string
          created_at?: string
          deleted_at?: string | null
          ends_at?: string | null
          id?: string
          is_disabled?: boolean
          is_dynamic?: boolean
          metadata?: Json | null
          parent_discount_id?: string | null
          rule_id?: string | null
          starts_at?: string
          updated_at?: string
          usage_count?: number
          usage_limit?: number | null
          valid_duration?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "FK_2250c5d9e975987ab212f61a663"
            columns: ["parent_discount_id"]
            isOneToOne: false
            referencedRelation: "discount"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "FK_ac2c280de3701b2d66f6817f760"
            columns: ["rule_id"]
            isOneToOne: false
            referencedRelation: "discount_rule"
            referencedColumns: ["id"]
          }
        ]
      }
      discount_condition: {
        Row: {
          created_at: string
          deleted_at: string | null
          discount_rule_id: string
          id: string
          metadata: Json | null
          operator: Database["public"]["Enums"]["discount_condition_operator_enum"]
          type: Database["public"]["Enums"]["discount_condition_type_enum"]
          updated_at: string
        }
        Insert: {
          created_at?: string
          deleted_at?: string | null
          discount_rule_id: string
          id: string
          metadata?: Json | null
          operator: Database["public"]["Enums"]["discount_condition_operator_enum"]
          type: Database["public"]["Enums"]["discount_condition_type_enum"]
          updated_at?: string
        }
        Update: {
          created_at?: string
          deleted_at?: string | null
          discount_rule_id?: string
          id?: string
          metadata?: Json | null
          operator?: Database["public"]["Enums"]["discount_condition_operator_enum"]
          type?: Database["public"]["Enums"]["discount_condition_type_enum"]
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "FK_efff700651718e452ca9580a624"
            columns: ["discount_rule_id"]
            isOneToOne: false
            referencedRelation: "discount_rule"
            referencedColumns: ["id"]
          }
        ]
      }
      discount_condition_customer_group: {
        Row: {
          condition_id: string
          created_at: string
          customer_group_id: string
          metadata: Json | null
          updated_at: string
        }
        Insert: {
          condition_id: string
          created_at?: string
          customer_group_id: string
          metadata?: Json | null
          updated_at?: string
        }
        Update: {
          condition_id?: string
          created_at?: string
          customer_group_id?: string
          metadata?: Json | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "FK_4d5f98645a67545d8dea42e2eb8"
            columns: ["customer_group_id"]
            isOneToOne: false
            referencedRelation: "customer_group"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "FK_8486ee16e69013c645d0b8716b6"
            columns: ["condition_id"]
            isOneToOne: false
            referencedRelation: "discount_condition"
            referencedColumns: ["id"]
          }
        ]
      }
      discount_condition_product: {
        Row: {
          condition_id: string
          created_at: string
          metadata: Json | null
          product_id: string
          updated_at: string
        }
        Insert: {
          condition_id: string
          created_at?: string
          metadata?: Json | null
          product_id: string
          updated_at?: string
        }
        Update: {
          condition_id?: string
          created_at?: string
          metadata?: Json | null
          product_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "FK_c759f53b2e48e8cfb50638fe4e0"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "product"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "FK_f05132301e95bdab4ba1cf29a24"
            columns: ["condition_id"]
            isOneToOne: false
            referencedRelation: "discount_condition"
            referencedColumns: ["id"]
          }
        ]
      }
      discount_condition_product_collection: {
        Row: {
          condition_id: string
          created_at: string
          metadata: Json | null
          product_collection_id: string
          updated_at: string
        }
        Insert: {
          condition_id: string
          created_at?: string
          metadata?: Json | null
          product_collection_id: string
          updated_at?: string
        }
        Update: {
          condition_id?: string
          created_at?: string
          metadata?: Json | null
          product_collection_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "FK_a0b05dc4257abe639cb75f8eae2"
            columns: ["product_collection_id"]
            isOneToOne: false
            referencedRelation: "product_collection"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "FK_a1c4f9cfb599ad1f0db39cadd5f"
            columns: ["condition_id"]
            isOneToOne: false
            referencedRelation: "discount_condition"
            referencedColumns: ["id"]
          }
        ]
      }
      discount_condition_product_tag: {
        Row: {
          condition_id: string
          created_at: string
          metadata: Json | null
          product_tag_id: string
          updated_at: string
        }
        Insert: {
          condition_id: string
          created_at?: string
          metadata?: Json | null
          product_tag_id: string
          updated_at?: string
        }
        Update: {
          condition_id?: string
          created_at?: string
          metadata?: Json | null
          product_tag_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "FK_01486cc9dc6b36bf658685535f6"
            columns: ["product_tag_id"]
            isOneToOne: false
            referencedRelation: "product_tag"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "FK_fbb2499551ed074526f3ee36241"
            columns: ["condition_id"]
            isOneToOne: false
            referencedRelation: "discount_condition"
            referencedColumns: ["id"]
          }
        ]
      }
      discount_condition_product_type: {
        Row: {
          condition_id: string
          created_at: string
          metadata: Json | null
          product_type_id: string
          updated_at: string
        }
        Insert: {
          condition_id: string
          created_at?: string
          metadata?: Json | null
          product_type_id: string
          updated_at?: string
        }
        Update: {
          condition_id?: string
          created_at?: string
          metadata?: Json | null
          product_type_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "FK_6ef23ce0b1d9cf9b5b833e52b9d"
            columns: ["condition_id"]
            isOneToOne: false
            referencedRelation: "discount_condition"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "FK_e706deb68f52ab2756119b9e704"
            columns: ["product_type_id"]
            isOneToOne: false
            referencedRelation: "product_type"
            referencedColumns: ["id"]
          }
        ]
      }
      discount_regions: {
        Row: {
          discount_id: string
          region_id: string
        }
        Insert: {
          discount_id: string
          region_id: string
        }
        Update: {
          discount_id?: string
          region_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "FK_a21a7ffbe420d492eb46c305fec"
            columns: ["region_id"]
            isOneToOne: false
            referencedRelation: "region"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "FK_f4194aa81073f3fab8aa86906ff"
            columns: ["discount_id"]
            isOneToOne: false
            referencedRelation: "discount"
            referencedColumns: ["id"]
          }
        ]
      }
      discount_rule: {
        Row: {
          allocation:
            | Database["public"]["Enums"]["discount_rule_allocation_enum"]
            | null
          created_at: string
          deleted_at: string | null
          description: string | null
          id: string
          metadata: Json | null
          type: Database["public"]["Enums"]["discount_rule_type_enum"]
          updated_at: string
          value: number
        }
        Insert: {
          allocation?:
            | Database["public"]["Enums"]["discount_rule_allocation_enum"]
            | null
          created_at?: string
          deleted_at?: string | null
          description?: string | null
          id: string
          metadata?: Json | null
          type: Database["public"]["Enums"]["discount_rule_type_enum"]
          updated_at?: string
          value: number
        }
        Update: {
          allocation?:
            | Database["public"]["Enums"]["discount_rule_allocation_enum"]
            | null
          created_at?: string
          deleted_at?: string | null
          description?: string | null
          id?: string
          metadata?: Json | null
          type?: Database["public"]["Enums"]["discount_rule_type_enum"]
          updated_at?: string
          value?: number
        }
        Relationships: []
      }
      discount_rule_products: {
        Row: {
          discount_rule_id: string
          product_id: string
        }
        Insert: {
          discount_rule_id: string
          product_id: string
        }
        Update: {
          discount_rule_id?: string
          product_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "FK_4e0739e5f0244c08d41174ca08a"
            columns: ["discount_rule_id"]
            isOneToOne: false
            referencedRelation: "discount_rule"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "FK_be66106a673b88a81c603abe7eb"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "product"
            referencedColumns: ["id"]
          }
        ]
      }
      draft_order: {
        Row: {
          canceled_at: string | null
          cart_id: string | null
          completed_at: string | null
          created_at: string
          display_id: number
          id: string
          idempotency_key: string | null
          metadata: Json | null
          no_notification_order: boolean | null
          order_id: string | null
          status: Database["public"]["Enums"]["draft_order_status_enum"]
          updated_at: string
        }
        Insert: {
          canceled_at?: string | null
          cart_id?: string | null
          completed_at?: string | null
          created_at?: string
          display_id?: number
          id: string
          idempotency_key?: string | null
          metadata?: Json | null
          no_notification_order?: boolean | null
          order_id?: string | null
          status?: Database["public"]["Enums"]["draft_order_status_enum"]
          updated_at?: string
        }
        Update: {
          canceled_at?: string | null
          cart_id?: string | null
          completed_at?: string | null
          created_at?: string
          display_id?: number
          id?: string
          idempotency_key?: string | null
          metadata?: Json | null
          no_notification_order?: boolean | null
          order_id?: string | null
          status?: Database["public"]["Enums"]["draft_order_status_enum"]
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "FK_5bd11d0e2a9628128e2c26fd0a6"
            columns: ["cart_id"]
            isOneToOne: true
            referencedRelation: "cart"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "FK_8f6dd6c49202f1466ebf21e77da"
            columns: ["order_id"]
            isOneToOne: true
            referencedRelation: "order"
            referencedColumns: ["id"]
          }
        ]
      }
      fulfillment: {
        Row: {
          canceled_at: string | null
          claim_order_id: string | null
          created_at: string
          data: Json
          id: string
          idempotency_key: string | null
          location_id: string | null
          metadata: Json | null
          no_notification: boolean | null
          order_id: string | null
          provider_id: string | null
          shipped_at: string | null
          swap_id: string | null
          tracking_numbers: Json
          updated_at: string
        }
        Insert: {
          canceled_at?: string | null
          claim_order_id?: string | null
          created_at?: string
          data: Json
          id: string
          idempotency_key?: string | null
          location_id?: string | null
          metadata?: Json | null
          no_notification?: boolean | null
          order_id?: string | null
          provider_id?: string | null
          shipped_at?: string | null
          swap_id?: string | null
          tracking_numbers?: Json
          updated_at?: string
        }
        Update: {
          canceled_at?: string | null
          claim_order_id?: string | null
          created_at?: string
          data?: Json
          id?: string
          idempotency_key?: string | null
          location_id?: string | null
          metadata?: Json | null
          no_notification?: boolean | null
          order_id?: string | null
          provider_id?: string | null
          shipped_at?: string | null
          swap_id?: string | null
          tracking_numbers?: Json
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "FK_a52e234f729db789cf473297a5c"
            columns: ["swap_id"]
            isOneToOne: false
            referencedRelation: "swap"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "FK_beb35a6de60a6c4f91d5ae57e44"
            columns: ["provider_id"]
            isOneToOne: false
            referencedRelation: "fulfillment_provider"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "FK_d73e55964e0ff2db8f03807d52e"
            columns: ["claim_order_id"]
            isOneToOne: false
            referencedRelation: "claim_order"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "FK_f129acc85e346a10eed12b86fca"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "order"
            referencedColumns: ["id"]
          }
        ]
      }
      fulfillment_item: {
        Row: {
          fulfillment_id: string
          item_id: string
          quantity: number
        }
        Insert: {
          fulfillment_id: string
          item_id: string
          quantity: number
        }
        Update: {
          fulfillment_id?: string
          item_id?: string
          quantity?: number
        }
        Relationships: [
          {
            foreignKeyName: "FK_a033f83cc6bd7701a5687ab4b38"
            columns: ["fulfillment_id"]
            isOneToOne: false
            referencedRelation: "fulfillment"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "FK_e13ff60e74206b747a1896212d1"
            columns: ["item_id"]
            isOneToOne: false
            referencedRelation: "line_item"
            referencedColumns: ["id"]
          }
        ]
      }
      fulfillment_provider: {
        Row: {
          id: string
          is_installed: boolean
        }
        Insert: {
          id: string
          is_installed?: boolean
        }
        Update: {
          id?: string
          is_installed?: boolean
        }
        Relationships: []
      }
      gift_card: {
        Row: {
          balance: number
          code: string
          created_at: string
          deleted_at: string | null
          ends_at: string | null
          id: string
          is_disabled: boolean
          metadata: Json | null
          order_id: string | null
          region_id: string
          tax_rate: number | null
          updated_at: string
          value: number
        }
        Insert: {
          balance: number
          code: string
          created_at?: string
          deleted_at?: string | null
          ends_at?: string | null
          id: string
          is_disabled?: boolean
          metadata?: Json | null
          order_id?: string | null
          region_id: string
          tax_rate?: number | null
          updated_at?: string
          value: number
        }
        Update: {
          balance?: number
          code?: string
          created_at?: string
          deleted_at?: string | null
          ends_at?: string | null
          id?: string
          is_disabled?: boolean
          metadata?: Json | null
          order_id?: string | null
          region_id?: string
          tax_rate?: number | null
          updated_at?: string
          value?: number
        }
        Relationships: [
          {
            foreignKeyName: "FK_b6bcf8c3903097b84e85154eed3"
            columns: ["region_id"]
            isOneToOne: false
            referencedRelation: "region"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "FK_dfc1f02bb0552e79076aa58dbb0"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "order"
            referencedColumns: ["id"]
          }
        ]
      }
      gift_card_transaction: {
        Row: {
          amount: number
          created_at: string
          gift_card_id: string
          id: string
          is_taxable: boolean | null
          order_id: string
          tax_rate: number | null
        }
        Insert: {
          amount: number
          created_at?: string
          gift_card_id: string
          id: string
          is_taxable?: boolean | null
          order_id: string
          tax_rate?: number | null
        }
        Update: {
          amount?: number
          created_at?: string
          gift_card_id?: string
          id?: string
          is_taxable?: boolean | null
          order_id?: string
          tax_rate?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "FK_3ff5597f1d7e02bba41541846f4"
            columns: ["gift_card_id"]
            isOneToOne: false
            referencedRelation: "gift_card"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "FK_d7d441b81012f87d4265fa57d24"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "order"
            referencedColumns: ["id"]
          }
        ]
      }
      hccproducts: {
        Row: {
          created_at: string
          id: number
          image: string | null
          name: string | null
          price: number | null
          stock: number | null
        }
        Insert: {
          created_at?: string
          id?: number
          image?: string | null
          name?: string | null
          price?: number | null
          stock?: number | null
        }
        Update: {
          created_at?: string
          id?: number
          image?: string | null
          name?: string | null
          price?: number | null
          stock?: number | null
        }
        Relationships: []
      }
      idempotency_key: {
        Row: {
          created_at: string
          id: string
          idempotency_key: string
          locked_at: string | null
          recovery_point: string
          request_method: string | null
          request_params: Json | null
          request_path: string | null
          response_body: Json | null
          response_code: number | null
        }
        Insert: {
          created_at?: string
          id: string
          idempotency_key: string
          locked_at?: string | null
          recovery_point?: string
          request_method?: string | null
          request_params?: Json | null
          request_path?: string | null
          response_body?: Json | null
          response_code?: number | null
        }
        Update: {
          created_at?: string
          id?: string
          idempotency_key?: string
          locked_at?: string | null
          recovery_point?: string
          request_method?: string | null
          request_params?: Json | null
          request_path?: string | null
          response_body?: Json | null
          response_code?: number | null
        }
        Relationships: []
      }
      image: {
        Row: {
          created_at: string
          deleted_at: string | null
          id: string
          metadata: Json | null
          updated_at: string
          url: string
        }
        Insert: {
          created_at?: string
          deleted_at?: string | null
          id: string
          metadata?: Json | null
          updated_at?: string
          url: string
        }
        Update: {
          created_at?: string
          deleted_at?: string | null
          id?: string
          metadata?: Json | null
          updated_at?: string
          url?: string
        }
        Relationships: []
      }
      invite: {
        Row: {
          accepted: boolean
          created_at: string
          deleted_at: string | null
          expires_at: string
          id: string
          metadata: Json | null
          role: Database["public"]["Enums"]["invite_role_enum"] | null
          token: string
          updated_at: string
          user_email: string
        }
        Insert: {
          accepted?: boolean
          created_at?: string
          deleted_at?: string | null
          expires_at?: string
          id: string
          metadata?: Json | null
          role?: Database["public"]["Enums"]["invite_role_enum"] | null
          token: string
          updated_at?: string
          user_email: string
        }
        Update: {
          accepted?: boolean
          created_at?: string
          deleted_at?: string | null
          expires_at?: string
          id?: string
          metadata?: Json | null
          role?: Database["public"]["Enums"]["invite_role_enum"] | null
          token?: string
          updated_at?: string
          user_email?: string
        }
        Relationships: []
      }
      line_item: {
        Row: {
          allow_discounts: boolean
          cart_id: string | null
          claim_order_id: string | null
          created_at: string
          description: string | null
          fulfilled_quantity: number | null
          has_shipping: boolean | null
          id: string
          is_giftcard: boolean
          is_return: boolean
          metadata: Json | null
          order_edit_id: string | null
          order_id: string | null
          original_item_id: string | null
          quantity: number
          returned_quantity: number | null
          shipped_quantity: number | null
          should_merge: boolean
          swap_id: string | null
          thumbnail: string | null
          title: string
          unit_price: number
          updated_at: string
          variant_id: string | null
        }
        Insert: {
          allow_discounts?: boolean
          cart_id?: string | null
          claim_order_id?: string | null
          created_at?: string
          description?: string | null
          fulfilled_quantity?: number | null
          has_shipping?: boolean | null
          id: string
          is_giftcard?: boolean
          is_return?: boolean
          metadata?: Json | null
          order_edit_id?: string | null
          order_id?: string | null
          original_item_id?: string | null
          quantity: number
          returned_quantity?: number | null
          shipped_quantity?: number | null
          should_merge?: boolean
          swap_id?: string | null
          thumbnail?: string | null
          title: string
          unit_price: number
          updated_at?: string
          variant_id?: string | null
        }
        Update: {
          allow_discounts?: boolean
          cart_id?: string | null
          claim_order_id?: string | null
          created_at?: string
          description?: string | null
          fulfilled_quantity?: number | null
          has_shipping?: boolean | null
          id?: string
          is_giftcard?: boolean
          is_return?: boolean
          metadata?: Json | null
          order_edit_id?: string | null
          order_id?: string | null
          original_item_id?: string | null
          quantity?: number
          returned_quantity?: number | null
          shipped_quantity?: number | null
          should_merge?: boolean
          swap_id?: string | null
          thumbnail?: string | null
          title?: string
          unit_price?: number
          updated_at?: string
          variant_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "FK_118e3c48f09a7728f41023c94ef"
            columns: ["claim_order_id"]
            isOneToOne: false
            referencedRelation: "claim_order"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "FK_27283ee631862266d0f1c680646"
            columns: ["cart_id"]
            isOneToOne: false
            referencedRelation: "cart"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "FK_3fa354d8d1233ff81097b2fcb6b"
            columns: ["swap_id"]
            isOneToOne: false
            referencedRelation: "swap"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "FK_43a2b24495fe1d9fc2a9c835bc7"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "order"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "FK_5371cbaa3be5200f373d24e3d5b"
            columns: ["variant_id"]
            isOneToOne: false
            referencedRelation: "product_variant"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "line_item_order_edit_fk"
            columns: ["order_edit_id"]
            isOneToOne: false
            referencedRelation: "order_edit"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "line_item_original_item_fk"
            columns: ["original_item_id"]
            isOneToOne: false
            referencedRelation: "line_item"
            referencedColumns: ["id"]
          }
        ]
      }
      line_item_adjustment: {
        Row: {
          amount: number
          description: string
          discount_id: string | null
          id: string
          item_id: string
          metadata: Json | null
        }
        Insert: {
          amount: number
          description: string
          discount_id?: string | null
          id: string
          item_id: string
          metadata?: Json | null
        }
        Update: {
          amount?: number
          description?: string
          discount_id?: string | null
          id?: string
          item_id?: string
          metadata?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "FK_2f41b20a71f30e60471d7e3769c"
            columns: ["discount_id"]
            isOneToOne: false
            referencedRelation: "discount"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "FK_be9aea2ccf3567007b6227da4d2"
            columns: ["item_id"]
            isOneToOne: false
            referencedRelation: "line_item"
            referencedColumns: ["id"]
          }
        ]
      }
      line_item_tax_line: {
        Row: {
          code: string | null
          created_at: string
          id: string
          item_id: string
          metadata: Json | null
          name: string
          rate: number
          updated_at: string
        }
        Insert: {
          code?: string | null
          created_at?: string
          id: string
          item_id: string
          metadata?: Json | null
          name: string
          rate: number
          updated_at?: string
        }
        Update: {
          code?: string | null
          created_at?: string
          id?: string
          item_id?: string
          metadata?: Json | null
          name?: string
          rate?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "FK_5077fa54b0d037e984385dfe8ad"
            columns: ["item_id"]
            isOneToOne: false
            referencedRelation: "line_item"
            referencedColumns: ["id"]
          }
        ]
      }
      migrations: {
        Row: {
          id: number
          name: string
          timestamp: number
        }
        Insert: {
          id?: number
          name: string
          timestamp: number
        }
        Update: {
          id?: number
          name?: string
          timestamp?: number
        }
        Relationships: []
      }
      money_amount: {
        Row: {
          amount: number
          created_at: string
          currency_code: string
          deleted_at: string | null
          id: string
          max_quantity: number | null
          min_quantity: number | null
          price_list_id: string | null
          region_id: string | null
          updated_at: string
        }
        Insert: {
          amount: number
          created_at?: string
          currency_code: string
          deleted_at?: string | null
          id: string
          max_quantity?: number | null
          min_quantity?: number | null
          price_list_id?: string | null
          region_id?: string | null
          updated_at?: string
        }
        Update: {
          amount?: number
          created_at?: string
          currency_code?: string
          deleted_at?: string | null
          id?: string
          max_quantity?: number | null
          min_quantity?: number | null
          price_list_id?: string | null
          region_id?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "FK_b433e27b7a83e6d12ab26b15b03"
            columns: ["region_id"]
            isOneToOne: false
            referencedRelation: "region"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "FK_e15811f81339e4bd8c440aebe1c"
            columns: ["currency_code"]
            isOneToOne: false
            referencedRelation: "currency"
            referencedColumns: ["code"]
          },
          {
            foreignKeyName: "FK_f249976b079375499662eb80c40"
            columns: ["price_list_id"]
            isOneToOne: false
            referencedRelation: "price_list"
            referencedColumns: ["id"]
          }
        ]
      }
      note: {
        Row: {
          author_id: string | null
          created_at: string
          deleted_at: string | null
          id: string
          metadata: Json | null
          resource_id: string
          resource_type: string
          updated_at: string
          value: string
        }
        Insert: {
          author_id?: string | null
          created_at?: string
          deleted_at?: string | null
          id: string
          metadata?: Json | null
          resource_id: string
          resource_type: string
          updated_at?: string
          value: string
        }
        Update: {
          author_id?: string | null
          created_at?: string
          deleted_at?: string | null
          id?: string
          metadata?: Json | null
          resource_id?: string
          resource_type?: string
          updated_at?: string
          value?: string
        }
        Relationships: []
      }
      notification: {
        Row: {
          created_at: string
          customer_id: string | null
          data: Json
          event_name: string | null
          id: string
          parent_id: string | null
          provider_id: string | null
          resource_id: string
          resource_type: string
          to: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          customer_id?: string | null
          data: Json
          event_name?: string | null
          id: string
          parent_id?: string | null
          provider_id?: string | null
          resource_id: string
          resource_type: string
          to: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          customer_id?: string | null
          data?: Json
          event_name?: string | null
          id?: string
          parent_id?: string | null
          provider_id?: string | null
          resource_id?: string
          resource_type?: string
          to?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "FK_0425c2423e2ce9fdfd5c23761d9"
            columns: ["provider_id"]
            isOneToOne: false
            referencedRelation: "notification_provider"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "FK_371db513192c083f48ba63c33be"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "notification"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "FK_b5df0f53a74b9d0c0a2b652c88d"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customer"
            referencedColumns: ["id"]
          }
        ]
      }
      notification_provider: {
        Row: {
          id: string
          is_installed: boolean
        }
        Insert: {
          id: string
          is_installed?: boolean
        }
        Update: {
          id?: string
          is_installed?: boolean
        }
        Relationships: []
      }
      oauth: {
        Row: {
          application_name: string
          data: Json | null
          display_name: string
          id: string
          install_url: string | null
          uninstall_url: string | null
        }
        Insert: {
          application_name: string
          data?: Json | null
          display_name: string
          id: string
          install_url?: string | null
          uninstall_url?: string | null
        }
        Update: {
          application_name?: string
          data?: Json | null
          display_name?: string
          id?: string
          install_url?: string | null
          uninstall_url?: string | null
        }
        Relationships: []
      }
      onboarding_state: {
        Row: {
          created_at: string
          current_step: string | null
          id: string
          is_complete: boolean
          product_id: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          current_step?: string | null
          id: string
          is_complete: boolean
          product_id?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          current_step?: string | null
          id?: string
          is_complete?: boolean
          product_id?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      order: {
        Row: {
          billing_address_id: string | null
          canceled_at: string | null
          cart_id: string | null
          created_at: string
          currency_code: string
          customer_id: string
          display_id: number
          draft_order_id: string | null
          email: string
          external_id: string | null
          fulfillment_status: Database["public"]["Enums"]["order_fulfillment_status_enum"]
          id: string
          idempotency_key: string | null
          metadata: Json | null
          no_notification: boolean | null
          payment_status: Database["public"]["Enums"]["order_payment_status_enum"]
          region_id: string
          sales_channel_id: string | null
          shipping_address_id: string | null
          status: Database["public"]["Enums"]["order_status_enum"]
          tax_rate: number | null
          updated_at: string
        }
        Insert: {
          billing_address_id?: string | null
          canceled_at?: string | null
          cart_id?: string | null
          created_at?: string
          currency_code: string
          customer_id: string
          display_id?: number
          draft_order_id?: string | null
          email: string
          external_id?: string | null
          fulfillment_status?: Database["public"]["Enums"]["order_fulfillment_status_enum"]
          id: string
          idempotency_key?: string | null
          metadata?: Json | null
          no_notification?: boolean | null
          payment_status?: Database["public"]["Enums"]["order_payment_status_enum"]
          region_id: string
          sales_channel_id?: string | null
          shipping_address_id?: string | null
          status?: Database["public"]["Enums"]["order_status_enum"]
          tax_rate?: number | null
          updated_at?: string
        }
        Update: {
          billing_address_id?: string | null
          canceled_at?: string | null
          cart_id?: string | null
          created_at?: string
          currency_code?: string
          customer_id?: string
          display_id?: number
          draft_order_id?: string | null
          email?: string
          external_id?: string | null
          fulfillment_status?: Database["public"]["Enums"]["order_fulfillment_status_enum"]
          id?: string
          idempotency_key?: string | null
          metadata?: Json | null
          no_notification?: boolean | null
          payment_status?: Database["public"]["Enums"]["order_payment_status_enum"]
          region_id?: string
          sales_channel_id?: string | null
          shipping_address_id?: string | null
          status?: Database["public"]["Enums"]["order_status_enum"]
          tax_rate?: number | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "FK_19b0c6293443d1b464f604c3316"
            columns: ["shipping_address_id"]
            isOneToOne: false
            referencedRelation: "address"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "FK_5568d3b9ce9f7abeeb37511ecf2"
            columns: ["billing_address_id"]
            isOneToOne: false
            referencedRelation: "address"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "FK_6ff7e874f01b478c115fdd462eb"
            columns: ["sales_channel_id"]
            isOneToOne: false
            referencedRelation: "sales_channel"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "FK_717a141f96b76d794d409f38129"
            columns: ["currency_code"]
            isOneToOne: false
            referencedRelation: "currency"
            referencedColumns: ["code"]
          },
          {
            foreignKeyName: "FK_727b872f86c7378474a8fa46147"
            columns: ["draft_order_id"]
            isOneToOne: true
            referencedRelation: "draft_order"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "FK_c99a206eb11ad45f6b7f04f2dcc"
            columns: ["cart_id"]
            isOneToOne: true
            referencedRelation: "cart"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "FK_cd7812c96209c5bdd48a6b858b0"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customer"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "FK_e1fcce2b18dbcdbe0a5ba9a68b8"
            columns: ["region_id"]
            isOneToOne: false
            referencedRelation: "region"
            referencedColumns: ["id"]
          }
        ]
      }
      order_discounts: {
        Row: {
          discount_id: string
          order_id: string
        }
        Insert: {
          discount_id: string
          order_id: string
        }
        Update: {
          discount_id?: string
          order_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "FK_0fc1ec4e3db9001ad60c19daf16"
            columns: ["discount_id"]
            isOneToOne: false
            referencedRelation: "discount"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "FK_e7b488cebe333f449398769b2cc"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "order"
            referencedColumns: ["id"]
          }
        ]
      }
      order_edit: {
        Row: {
          canceled_at: string | null
          canceled_by: string | null
          confirmed_at: string | null
          confirmed_by: string | null
          created_at: string
          created_by: string
          declined_at: string | null
          declined_by: string | null
          declined_reason: string | null
          id: string
          internal_note: string | null
          order_id: string
          payment_collection_id: string | null
          requested_at: string | null
          requested_by: string | null
          updated_at: string
        }
        Insert: {
          canceled_at?: string | null
          canceled_by?: string | null
          confirmed_at?: string | null
          confirmed_by?: string | null
          created_at?: string
          created_by: string
          declined_at?: string | null
          declined_by?: string | null
          declined_reason?: string | null
          id: string
          internal_note?: string | null
          order_id: string
          payment_collection_id?: string | null
          requested_at?: string | null
          requested_by?: string | null
          updated_at?: string
        }
        Update: {
          canceled_at?: string | null
          canceled_by?: string | null
          confirmed_at?: string | null
          confirmed_by?: string | null
          created_at?: string
          created_by?: string
          declined_at?: string | null
          declined_by?: string | null
          declined_reason?: string | null
          id?: string
          internal_note?: string | null
          order_id?: string
          payment_collection_id?: string | null
          requested_at?: string | null
          requested_by?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "FK_1f3a251488a91510f57e1bf93cd"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "order"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "FK_order_edit_payment_collection_id"
            columns: ["payment_collection_id"]
            isOneToOne: false
            referencedRelation: "payment_collection"
            referencedColumns: ["id"]
          }
        ]
      }
      order_gift_cards: {
        Row: {
          gift_card_id: string
          order_id: string
        }
        Insert: {
          gift_card_id: string
          order_id: string
        }
        Update: {
          gift_card_id?: string
          order_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "FK_e62ff11e4730bb3adfead979ee2"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "order"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "FK_f2bb9f71e95b315eb24b2b84cb3"
            columns: ["gift_card_id"]
            isOneToOne: false
            referencedRelation: "gift_card"
            referencedColumns: ["id"]
          }
        ]
      }
      order_item_change: {
        Row: {
          created_at: string
          deleted_at: string | null
          id: string
          line_item_id: string | null
          order_edit_id: string
          original_line_item_id: string | null
          type: Database["public"]["Enums"]["order_item_change_type_enum"]
          updated_at: string
        }
        Insert: {
          created_at?: string
          deleted_at?: string | null
          id: string
          line_item_id?: string | null
          order_edit_id: string
          original_line_item_id?: string | null
          type: Database["public"]["Enums"]["order_item_change_type_enum"]
          updated_at?: string
        }
        Update: {
          created_at?: string
          deleted_at?: string | null
          id?: string
          line_item_id?: string | null
          order_edit_id?: string
          original_line_item_id?: string | null
          type?: Database["public"]["Enums"]["order_item_change_type_enum"]
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "FK_44feeebb258bf4cfa4cc4202281"
            columns: ["order_edit_id"]
            isOneToOne: false
            referencedRelation: "order_edit"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "FK_5f9688929761f7df108b630e64a"
            columns: ["line_item_id"]
            isOneToOne: true
            referencedRelation: "line_item"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "FK_b4d53b8d03c9f5e7d4317e818d9"
            columns: ["original_line_item_id"]
            isOneToOne: false
            referencedRelation: "line_item"
            referencedColumns: ["id"]
          }
        ]
      }
      payment: {
        Row: {
          amount: number
          amount_refunded: number
          canceled_at: string | null
          captured_at: string | null
          cart_id: string | null
          created_at: string
          currency_code: string
          data: Json
          id: string
          idempotency_key: string | null
          metadata: Json | null
          order_id: string | null
          provider_id: string
          swap_id: string | null
          updated_at: string
        }
        Insert: {
          amount: number
          amount_refunded?: number
          canceled_at?: string | null
          captured_at?: string | null
          cart_id?: string | null
          created_at?: string
          currency_code: string
          data: Json
          id: string
          idempotency_key?: string | null
          metadata?: Json | null
          order_id?: string | null
          provider_id: string
          swap_id?: string | null
          updated_at?: string
        }
        Update: {
          amount?: number
          amount_refunded?: number
          canceled_at?: string | null
          captured_at?: string | null
          cart_id?: string | null
          created_at?: string
          currency_code?: string
          data?: Json
          id?: string
          idempotency_key?: string | null
          metadata?: Json | null
          order_id?: string | null
          provider_id?: string
          swap_id?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "FK_4665f17abc1e81dd58330e58542"
            columns: ["cart_id"]
            isOneToOne: false
            referencedRelation: "cart"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "FK_c17aff091441b7c25ec3d68d36c"
            columns: ["swap_id"]
            isOneToOne: true
            referencedRelation: "swap"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "FK_f41553459a4b1491c9893ebc921"
            columns: ["currency_code"]
            isOneToOne: false
            referencedRelation: "currency"
            referencedColumns: ["code"]
          },
          {
            foreignKeyName: "FK_f5221735ace059250daac9d9803"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "order"
            referencedColumns: ["id"]
          }
        ]
      }
      payment_collection: {
        Row: {
          amount: number
          authorized_amount: number | null
          created_at: string
          created_by: string
          currency_code: string
          deleted_at: string | null
          description: string | null
          id: string
          metadata: Json | null
          region_id: string
          status: Database["public"]["Enums"]["PAYMENT_COLLECTION_STATUS_ENUM"]
          type: Database["public"]["Enums"]["PAYMENT_COLLECTION_TYPE_ENUM"]
          updated_at: string
        }
        Insert: {
          amount: number
          authorized_amount?: number | null
          created_at?: string
          created_by: string
          currency_code: string
          deleted_at?: string | null
          description?: string | null
          id: string
          metadata?: Json | null
          region_id: string
          status: Database["public"]["Enums"]["PAYMENT_COLLECTION_STATUS_ENUM"]
          type: Database["public"]["Enums"]["PAYMENT_COLLECTION_TYPE_ENUM"]
          updated_at?: string
        }
        Update: {
          amount?: number
          authorized_amount?: number | null
          created_at?: string
          created_by?: string
          currency_code?: string
          deleted_at?: string | null
          description?: string | null
          id?: string
          metadata?: Json | null
          region_id?: string
          status?: Database["public"]["Enums"]["PAYMENT_COLLECTION_STATUS_ENUM"]
          type?: Database["public"]["Enums"]["PAYMENT_COLLECTION_TYPE_ENUM"]
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "FK_payment_collection_region_id"
            columns: ["region_id"]
            isOneToOne: false
            referencedRelation: "region"
            referencedColumns: ["id"]
          }
        ]
      }
      payment_collection_payments: {
        Row: {
          payment_collection_id: string
          payment_id: string
        }
        Insert: {
          payment_collection_id: string
          payment_id: string
        }
        Update: {
          payment_collection_id?: string
          payment_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "FK_payment_collection_payments_payment_collection_id"
            columns: ["payment_collection_id"]
            isOneToOne: false
            referencedRelation: "payment_collection"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "FK_payment_collection_payments_payment_id"
            columns: ["payment_id"]
            isOneToOne: false
            referencedRelation: "payment"
            referencedColumns: ["id"]
          }
        ]
      }
      payment_collection_sessions: {
        Row: {
          payment_collection_id: string
          payment_session_id: string
        }
        Insert: {
          payment_collection_id: string
          payment_session_id: string
        }
        Update: {
          payment_collection_id?: string
          payment_session_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "FK_payment_collection_sessions_payment_collection_id"
            columns: ["payment_collection_id"]
            isOneToOne: false
            referencedRelation: "payment_collection"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "FK_payment_collection_sessions_payment_session_id"
            columns: ["payment_session_id"]
            isOneToOne: false
            referencedRelation: "payment_session"
            referencedColumns: ["id"]
          }
        ]
      }
      payment_provider: {
        Row: {
          id: string
          is_installed: boolean
        }
        Insert: {
          id: string
          is_installed?: boolean
        }
        Update: {
          id?: string
          is_installed?: boolean
        }
        Relationships: []
      }
      payment_session: {
        Row: {
          amount: number | null
          cart_id: string | null
          created_at: string
          data: Json
          id: string
          idempotency_key: string | null
          is_initiated: boolean
          is_selected: boolean | null
          payment_authorized_at: string | null
          provider_id: string
          status: Database["public"]["Enums"]["payment_session_status_enum"]
          updated_at: string
        }
        Insert: {
          amount?: number | null
          cart_id?: string | null
          created_at?: string
          data: Json
          id: string
          idempotency_key?: string | null
          is_initiated?: boolean
          is_selected?: boolean | null
          payment_authorized_at?: string | null
          provider_id: string
          status: Database["public"]["Enums"]["payment_session_status_enum"]
          updated_at?: string
        }
        Update: {
          amount?: number | null
          cart_id?: string | null
          created_at?: string
          data?: Json
          id?: string
          idempotency_key?: string | null
          is_initiated?: boolean
          is_selected?: boolean | null
          payment_authorized_at?: string | null
          provider_id?: string
          status?: Database["public"]["Enums"]["payment_session_status_enum"]
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "FK_d25ba0787e1510ddc5d442ebcfa"
            columns: ["cart_id"]
            isOneToOne: false
            referencedRelation: "cart"
            referencedColumns: ["id"]
          }
        ]
      }
      price_list: {
        Row: {
          created_at: string
          deleted_at: string | null
          description: string
          ends_at: string | null
          id: string
          name: string
          starts_at: string | null
          status: Database["public"]["Enums"]["price_list_status_enum"]
          type: Database["public"]["Enums"]["price_list_type_enum"]
          updated_at: string
        }
        Insert: {
          created_at?: string
          deleted_at?: string | null
          description: string
          ends_at?: string | null
          id: string
          name: string
          starts_at?: string | null
          status?: Database["public"]["Enums"]["price_list_status_enum"]
          type?: Database["public"]["Enums"]["price_list_type_enum"]
          updated_at?: string
        }
        Update: {
          created_at?: string
          deleted_at?: string | null
          description?: string
          ends_at?: string | null
          id?: string
          name?: string
          starts_at?: string | null
          status?: Database["public"]["Enums"]["price_list_status_enum"]
          type?: Database["public"]["Enums"]["price_list_type_enum"]
          updated_at?: string
        }
        Relationships: []
      }
      price_list_customer_groups: {
        Row: {
          customer_group_id: string
          price_list_id: string
        }
        Insert: {
          customer_group_id: string
          price_list_id: string
        }
        Update: {
          customer_group_id?: string
          price_list_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "FK_52875734e9dd69064f0041f4d92"
            columns: ["price_list_id"]
            isOneToOne: false
            referencedRelation: "price_list"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "FK_c5516f550433c9b1c2630d787a7"
            columns: ["customer_group_id"]
            isOneToOne: false
            referencedRelation: "customer_group"
            referencedColumns: ["id"]
          }
        ]
      }
      product: {
        Row: {
          collection_id: string | null
          created_at: string
          deleted_at: string | null
          description: string | null
          discountable: boolean
          external_id: string | null
          handle: string | null
          height: number | null
          hs_code: string | null
          id: string
          is_giftcard: boolean
          length: number | null
          material: string | null
          metadata: Json | null
          mid_code: string | null
          origin_country: string | null
          status: Database["public"]["Enums"]["product_status_enum"]
          subtitle: string | null
          thumbnail: string | null
          title: string
          type_id: string | null
          updated_at: string
          weight: number | null
          width: number | null
        }
        Insert: {
          collection_id?: string | null
          created_at?: string
          deleted_at?: string | null
          description?: string | null
          discountable?: boolean
          external_id?: string | null
          handle?: string | null
          height?: number | null
          hs_code?: string | null
          id: string
          is_giftcard?: boolean
          length?: number | null
          material?: string | null
          metadata?: Json | null
          mid_code?: string | null
          origin_country?: string | null
          status?: Database["public"]["Enums"]["product_status_enum"]
          subtitle?: string | null
          thumbnail?: string | null
          title: string
          type_id?: string | null
          updated_at?: string
          weight?: number | null
          width?: number | null
        }
        Update: {
          collection_id?: string | null
          created_at?: string
          deleted_at?: string | null
          description?: string | null
          discountable?: boolean
          external_id?: string | null
          handle?: string | null
          height?: number | null
          hs_code?: string | null
          id?: string
          is_giftcard?: boolean
          length?: number | null
          material?: string | null
          metadata?: Json | null
          mid_code?: string | null
          origin_country?: string | null
          status?: Database["public"]["Enums"]["product_status_enum"]
          subtitle?: string | null
          thumbnail?: string | null
          title?: string
          type_id?: string | null
          updated_at?: string
          weight?: number | null
          width?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "FK_49d419fc77d3aed46c835c558ac"
            columns: ["collection_id"]
            isOneToOne: false
            referencedRelation: "product_collection"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "FK_e0843930fbb8854fe36ca39dae1"
            columns: ["type_id"]
            isOneToOne: false
            referencedRelation: "product_type"
            referencedColumns: ["id"]
          }
        ]
      }
      product_category: {
        Row: {
          created_at: string
          description: string
          handle: string
          id: string
          is_active: boolean | null
          is_internal: boolean | null
          metadata: Json | null
          mpath: string | null
          name: string
          parent_category_id: string | null
          rank: number
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string
          handle: string
          id: string
          is_active?: boolean | null
          is_internal?: boolean | null
          metadata?: Json | null
          mpath?: string | null
          name: string
          parent_category_id?: string | null
          rank?: number
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string
          handle?: string
          id?: string
          is_active?: boolean | null
          is_internal?: boolean | null
          metadata?: Json | null
          mpath?: string | null
          name?: string
          parent_category_id?: string | null
          rank?: number
          updated_at?: string
        }
        Relationships: []
      }
      product_category_product: {
        Row: {
          product_category_id: string
          product_id: string
        }
        Insert: {
          product_category_id: string
          product_id: string
        }
        Update: {
          product_category_id?: string
          product_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "FK_product_category_id"
            columns: ["product_category_id"]
            isOneToOne: false
            referencedRelation: "product_category"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "FK_product_id"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "product"
            referencedColumns: ["id"]
          }
        ]
      }
      product_collection: {
        Row: {
          created_at: string
          deleted_at: string | null
          handle: string | null
          id: string
          metadata: Json | null
          title: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          deleted_at?: string | null
          handle?: string | null
          id: string
          metadata?: Json | null
          title: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          deleted_at?: string | null
          handle?: string | null
          id?: string
          metadata?: Json | null
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      product_images: {
        Row: {
          image_id: string
          product_id: string
        }
        Insert: {
          image_id: string
          product_id: string
        }
        Update: {
          image_id?: string
          product_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "FK_2212515ba306c79f42c46a99db7"
            columns: ["image_id"]
            isOneToOne: false
            referencedRelation: "image"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "FK_4f166bb8c2bfcef2498d97b4068"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "product"
            referencedColumns: ["id"]
          }
        ]
      }
      product_option: {
        Row: {
          created_at: string
          deleted_at: string | null
          id: string
          metadata: Json | null
          product_id: string | null
          title: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          deleted_at?: string | null
          id: string
          metadata?: Json | null
          product_id?: string | null
          title: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          deleted_at?: string | null
          id?: string
          metadata?: Json | null
          product_id?: string | null
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "FK_e634fca34f6b594b87fdbee95f6"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "product"
            referencedColumns: ["id"]
          }
        ]
      }
      product_option_value: {
        Row: {
          created_at: string
          deleted_at: string | null
          id: string
          metadata: Json | null
          option_id: string
          updated_at: string
          value: string
          variant_id: string
        }
        Insert: {
          created_at?: string
          deleted_at?: string | null
          id: string
          metadata?: Json | null
          option_id: string
          updated_at?: string
          value: string
          variant_id: string
        }
        Update: {
          created_at?: string
          deleted_at?: string | null
          id?: string
          metadata?: Json | null
          option_id?: string
          updated_at?: string
          value?: string
          variant_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "FK_7234ed737ff4eb1b6ae6e6d7b01"
            columns: ["variant_id"]
            isOneToOne: false
            referencedRelation: "product_variant"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "FK_cdf4388f294b30a25c627d69fe9"
            columns: ["option_id"]
            isOneToOne: false
            referencedRelation: "product_option"
            referencedColumns: ["id"]
          }
        ]
      }
      product_sales_channel: {
        Row: {
          product_id: string
          sales_channel_id: string
        }
        Insert: {
          product_id: string
          sales_channel_id: string
        }
        Update: {
          product_id?: string
          sales_channel_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "FK_37341bad297fe5cca91f921032b"
            columns: ["sales_channel_id"]
            isOneToOne: false
            referencedRelation: "sales_channel"
            referencedColumns: ["id"]
          }
        ]
      }
      product_shipping_profile: {
        Row: {
          product_id: string
          profile_id: string
        }
        Insert: {
          product_id: string
          profile_id: string
        }
        Update: {
          product_id?: string
          profile_id?: string
        }
        Relationships: []
      }
      product_tag: {
        Row: {
          created_at: string
          deleted_at: string | null
          id: string
          metadata: Json | null
          updated_at: string
          value: string
        }
        Insert: {
          created_at?: string
          deleted_at?: string | null
          id: string
          metadata?: Json | null
          updated_at?: string
          value: string
        }
        Update: {
          created_at?: string
          deleted_at?: string | null
          id?: string
          metadata?: Json | null
          updated_at?: string
          value?: string
        }
        Relationships: []
      }
      product_tags: {
        Row: {
          product_id: string
          product_tag_id: string
        }
        Insert: {
          product_id: string
          product_tag_id: string
        }
        Update: {
          product_id?: string
          product_tag_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "FK_21683a063fe82dafdf681ecc9c4"
            columns: ["product_tag_id"]
            isOneToOne: false
            referencedRelation: "product_tag"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "FK_5b0c6fc53c574299ecc7f9ee22e"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "product"
            referencedColumns: ["id"]
          }
        ]
      }
      product_tax_rate: {
        Row: {
          created_at: string
          metadata: Json | null
          product_id: string
          rate_id: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          metadata?: Json | null
          product_id: string
          rate_id: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          metadata?: Json | null
          product_id?: string
          rate_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "FK_1d04aebeabb6a89f87e536a124d"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "product"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "FK_2484cf14c437a04586b07e7dddb"
            columns: ["rate_id"]
            isOneToOne: false
            referencedRelation: "tax_rate"
            referencedColumns: ["id"]
          }
        ]
      }
      product_type: {
        Row: {
          created_at: string
          deleted_at: string | null
          id: string
          metadata: Json | null
          updated_at: string
          value: string
        }
        Insert: {
          created_at?: string
          deleted_at?: string | null
          id: string
          metadata?: Json | null
          updated_at?: string
          value: string
        }
        Update: {
          created_at?: string
          deleted_at?: string | null
          id?: string
          metadata?: Json | null
          updated_at?: string
          value?: string
        }
        Relationships: []
      }
      product_type_tax_rate: {
        Row: {
          created_at: string
          metadata: Json | null
          product_type_id: string
          rate_id: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          metadata?: Json | null
          product_type_id: string
          rate_id: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          metadata?: Json | null
          product_type_id?: string
          rate_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "FK_25a3138bb236f63d9bb6c8ff111"
            columns: ["product_type_id"]
            isOneToOne: false
            referencedRelation: "product_type"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "FK_ece65a774192b34253abc4cd672"
            columns: ["rate_id"]
            isOneToOne: false
            referencedRelation: "tax_rate"
            referencedColumns: ["id"]
          }
        ]
      }
      product_variant: {
        Row: {
          allow_backorder: boolean
          barcode: string | null
          created_at: string
          deleted_at: string | null
          ean: string | null
          height: number | null
          hs_code: string | null
          id: string
          inventory_quantity: number
          length: number | null
          manage_inventory: boolean
          material: string | null
          metadata: Json | null
          mid_code: string | null
          origin_country: string | null
          product_id: string
          sku: string | null
          title: string
          upc: string | null
          updated_at: string
          variant_rank: number | null
          weight: number | null
          width: number | null
        }
        Insert: {
          allow_backorder?: boolean
          barcode?: string | null
          created_at?: string
          deleted_at?: string | null
          ean?: string | null
          height?: number | null
          hs_code?: string | null
          id: string
          inventory_quantity: number
          length?: number | null
          manage_inventory?: boolean
          material?: string | null
          metadata?: Json | null
          mid_code?: string | null
          origin_country?: string | null
          product_id: string
          sku?: string | null
          title: string
          upc?: string | null
          updated_at?: string
          variant_rank?: number | null
          weight?: number | null
          width?: number | null
        }
        Update: {
          allow_backorder?: boolean
          barcode?: string | null
          created_at?: string
          deleted_at?: string | null
          ean?: string | null
          height?: number | null
          hs_code?: string | null
          id?: string
          inventory_quantity?: number
          length?: number | null
          manage_inventory?: boolean
          material?: string | null
          metadata?: Json | null
          mid_code?: string | null
          origin_country?: string | null
          product_id?: string
          sku?: string | null
          title?: string
          upc?: string | null
          updated_at?: string
          variant_rank?: number | null
          weight?: number | null
          width?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "FK_ca67dd080aac5ecf99609960cd2"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "product"
            referencedColumns: ["id"]
          }
        ]
      }
      product_variant_inventory_item: {
        Row: {
          created_at: string
          deleted_at: string | null
          id: string
          inventory_item_id: string
          required_quantity: number
          updated_at: string
          variant_id: string
        }
        Insert: {
          created_at?: string
          deleted_at?: string | null
          id: string
          inventory_item_id: string
          required_quantity?: number
          updated_at?: string
          variant_id: string
        }
        Update: {
          created_at?: string
          deleted_at?: string | null
          id?: string
          inventory_item_id?: string
          required_quantity?: number
          updated_at?: string
          variant_id?: string
        }
        Relationships: []
      }
      product_variant_money_amount: {
        Row: {
          created_at: string
          deleted_at: string | null
          id: string
          money_amount_id: string
          updated_at: string
          variant_id: string
        }
        Insert: {
          created_at?: string
          deleted_at?: string | null
          id: string
          money_amount_id: string
          updated_at?: string
          variant_id: string
        }
        Update: {
          created_at?: string
          deleted_at?: string | null
          id?: string
          money_amount_id?: string
          updated_at?: string
          variant_id?: string
        }
        Relationships: []
      }
      publishable_api_key: {
        Row: {
          created_at: string
          created_by: string | null
          id: string
          revoked_at: string | null
          revoked_by: string | null
          title: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          id: string
          revoked_at?: string | null
          revoked_by?: string | null
          title: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          created_by?: string | null
          id?: string
          revoked_at?: string | null
          revoked_by?: string | null
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      publishable_api_key_sales_channel: {
        Row: {
          created_at: string
          deleted_at: string | null
          id: string
          publishable_key_id: string
          sales_channel_id: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          deleted_at?: string | null
          id: string
          publishable_key_id: string
          sales_channel_id: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          deleted_at?: string | null
          id?: string
          publishable_key_id?: string
          sales_channel_id?: string
          updated_at?: string
        }
        Relationships: []
      }
      refund: {
        Row: {
          amount: number
          created_at: string
          id: string
          idempotency_key: string | null
          metadata: Json | null
          note: string | null
          order_id: string | null
          payment_id: string | null
          reason: Database["public"]["Enums"]["refund_reason_enum"]
          updated_at: string
        }
        Insert: {
          amount: number
          created_at?: string
          id: string
          idempotency_key?: string | null
          metadata?: Json | null
          note?: string | null
          order_id?: string | null
          payment_id?: string | null
          reason: Database["public"]["Enums"]["refund_reason_enum"]
          updated_at?: string
        }
        Update: {
          amount?: number
          created_at?: string
          id?: string
          idempotency_key?: string | null
          metadata?: Json | null
          note?: string | null
          order_id?: string | null
          payment_id?: string | null
          reason?: Database["public"]["Enums"]["refund_reason_enum"]
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "FK_eec9d9af4ca098e19ea6b499eaa"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "order"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "FK_refund_payment_id"
            columns: ["payment_id"]
            isOneToOne: false
            referencedRelation: "payment"
            referencedColumns: ["id"]
          }
        ]
      }
      region: {
        Row: {
          automatic_taxes: boolean
          created_at: string
          currency_code: string
          deleted_at: string | null
          gift_cards_taxable: boolean
          id: string
          metadata: Json | null
          name: string
          tax_code: string | null
          tax_provider_id: string | null
          tax_rate: number
          updated_at: string
        }
        Insert: {
          automatic_taxes?: boolean
          created_at?: string
          currency_code: string
          deleted_at?: string | null
          gift_cards_taxable?: boolean
          id: string
          metadata?: Json | null
          name: string
          tax_code?: string | null
          tax_provider_id?: string | null
          tax_rate: number
          updated_at?: string
        }
        Update: {
          automatic_taxes?: boolean
          created_at?: string
          currency_code?: string
          deleted_at?: string | null
          gift_cards_taxable?: boolean
          id?: string
          metadata?: Json | null
          name?: string
          tax_code?: string | null
          tax_provider_id?: string | null
          tax_rate?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "FK_3bdd5896ec93be2f1c62a3309a5"
            columns: ["currency_code"]
            isOneToOne: false
            referencedRelation: "currency"
            referencedColumns: ["code"]
          },
          {
            foreignKeyName: "FK_91f88052197680f9790272aaf5b"
            columns: ["tax_provider_id"]
            isOneToOne: false
            referencedRelation: "tax_provider"
            referencedColumns: ["id"]
          }
        ]
      }
      region_fulfillment_providers: {
        Row: {
          provider_id: string
          region_id: string
        }
        Insert: {
          provider_id: string
          region_id: string
        }
        Update: {
          provider_id?: string
          region_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "FK_37f361c38a18d12a3fa3158d0cf"
            columns: ["provider_id"]
            isOneToOne: false
            referencedRelation: "fulfillment_provider"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "FK_c556e14eff4d6f03db593df955e"
            columns: ["region_id"]
            isOneToOne: false
            referencedRelation: "region"
            referencedColumns: ["id"]
          }
        ]
      }
      region_payment_providers: {
        Row: {
          provider_id: string
          region_id: string
        }
        Insert: {
          provider_id: string
          region_id: string
        }
        Update: {
          provider_id?: string
          region_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "FK_3a6947180aeec283cd92c59ebb0"
            columns: ["provider_id"]
            isOneToOne: false
            referencedRelation: "payment_provider"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "FK_8aaa78ba90d3802edac317df869"
            columns: ["region_id"]
            isOneToOne: false
            referencedRelation: "region"
            referencedColumns: ["id"]
          }
        ]
      }
      return: {
        Row: {
          claim_order_id: string | null
          created_at: string
          id: string
          idempotency_key: string | null
          location_id: string | null
          metadata: Json | null
          no_notification: boolean | null
          order_id: string | null
          received_at: string | null
          refund_amount: number
          shipping_data: Json | null
          status: Database["public"]["Enums"]["return_status_enum"]
          swap_id: string | null
          updated_at: string
        }
        Insert: {
          claim_order_id?: string | null
          created_at?: string
          id: string
          idempotency_key?: string | null
          location_id?: string | null
          metadata?: Json | null
          no_notification?: boolean | null
          order_id?: string | null
          received_at?: string | null
          refund_amount: number
          shipping_data?: Json | null
          status?: Database["public"]["Enums"]["return_status_enum"]
          swap_id?: string | null
          updated_at?: string
        }
        Update: {
          claim_order_id?: string | null
          created_at?: string
          id?: string
          idempotency_key?: string | null
          location_id?: string | null
          metadata?: Json | null
          no_notification?: boolean | null
          order_id?: string | null
          received_at?: string | null
          refund_amount?: number
          shipping_data?: Json | null
          status?: Database["public"]["Enums"]["return_status_enum"]
          swap_id?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "FK_71773d56eb2bacb922bc3283398"
            columns: ["claim_order_id"]
            isOneToOne: true
            referencedRelation: "claim_order"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "FK_bad82d7bff2b08b87094bfac3d6"
            columns: ["swap_id"]
            isOneToOne: true
            referencedRelation: "swap"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "FK_d4bd17f918fc6c332b74a368c36"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "order"
            referencedColumns: ["id"]
          }
        ]
      }
      return_item: {
        Row: {
          is_requested: boolean
          item_id: string
          metadata: Json | null
          note: string | null
          quantity: number
          reason_id: string | null
          received_quantity: number | null
          requested_quantity: number | null
          return_id: string
        }
        Insert: {
          is_requested?: boolean
          item_id: string
          metadata?: Json | null
          note?: string | null
          quantity: number
          reason_id?: string | null
          received_quantity?: number | null
          requested_quantity?: number | null
          return_id: string
        }
        Update: {
          is_requested?: boolean
          item_id?: string
          metadata?: Json | null
          note?: string | null
          quantity?: number
          reason_id?: string | null
          received_quantity?: number | null
          requested_quantity?: number | null
          return_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "FK_7edab75b4fc88ea6d4f2574f087"
            columns: ["return_id"]
            isOneToOne: false
            referencedRelation: "return"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "FK_87774591f44564effd8039d7162"
            columns: ["item_id"]
            isOneToOne: false
            referencedRelation: "line_item"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "FK_d742532378a65022e7ceb328828"
            columns: ["reason_id"]
            isOneToOne: false
            referencedRelation: "return_reason"
            referencedColumns: ["id"]
          }
        ]
      }
      return_reason: {
        Row: {
          created_at: string
          deleted_at: string | null
          description: string | null
          id: string
          label: string
          metadata: Json | null
          parent_return_reason_id: string | null
          updated_at: string
          value: string
        }
        Insert: {
          created_at?: string
          deleted_at?: string | null
          description?: string | null
          id: string
          label: string
          metadata?: Json | null
          parent_return_reason_id?: string | null
          updated_at?: string
          value: string
        }
        Update: {
          created_at?: string
          deleted_at?: string | null
          description?: string | null
          id?: string
          label?: string
          metadata?: Json | null
          parent_return_reason_id?: string | null
          updated_at?: string
          value?: string
        }
        Relationships: [
          {
            foreignKeyName: "FK_2250c5d9e975987ab212f61a657"
            columns: ["parent_return_reason_id"]
            isOneToOne: false
            referencedRelation: "return_reason"
            referencedColumns: ["id"]
          }
        ]
      }
      sales_channel: {
        Row: {
          created_at: string
          deleted_at: string | null
          description: string | null
          id: string
          is_disabled: boolean
          metadata: Json | null
          name: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          deleted_at?: string | null
          description?: string | null
          id: string
          is_disabled?: boolean
          metadata?: Json | null
          name: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          deleted_at?: string | null
          description?: string | null
          id?: string
          is_disabled?: boolean
          metadata?: Json | null
          name?: string
          updated_at?: string
        }
        Relationships: []
      }
      sales_channel_location: {
        Row: {
          created_at: string
          deleted_at: string | null
          id: string
          location_id: string
          sales_channel_id: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          deleted_at?: string | null
          id: string
          location_id: string
          sales_channel_id: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          deleted_at?: string | null
          id?: string
          location_id?: string
          sales_channel_id?: string
          updated_at?: string
        }
        Relationships: []
      }
      shipping_method: {
        Row: {
          cart_id: string | null
          claim_order_id: string | null
          data: Json
          id: string
          order_id: string | null
          price: number
          return_id: string | null
          shipping_option_id: string
          swap_id: string | null
        }
        Insert: {
          cart_id?: string | null
          claim_order_id?: string | null
          data: Json
          id: string
          order_id?: string | null
          price: number
          return_id?: string | null
          shipping_option_id: string
          swap_id?: string | null
        }
        Update: {
          cart_id?: string | null
          claim_order_id?: string | null
          data?: Json
          id?: string
          order_id?: string | null
          price?: number
          return_id?: string | null
          shipping_option_id?: string
          swap_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "FK_1d9ad62038998c3a85c77a53cfb"
            columns: ["return_id"]
            isOneToOne: true
            referencedRelation: "return"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "FK_5267705a43d547e232535b656c2"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "order"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "FK_d783a66d1c91c0858752c933e68"
            columns: ["claim_order_id"]
            isOneToOne: false
            referencedRelation: "claim_order"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "FK_d92993a7d554d84571f4eea1d13"
            columns: ["cart_id"]
            isOneToOne: false
            referencedRelation: "cart"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "FK_fb94fa8d5ca940daa2a58139f86"
            columns: ["swap_id"]
            isOneToOne: false
            referencedRelation: "swap"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "FK_fc963e94854bff2714ca84cd193"
            columns: ["shipping_option_id"]
            isOneToOne: false
            referencedRelation: "shipping_option"
            referencedColumns: ["id"]
          }
        ]
      }
      shipping_method_tax_line: {
        Row: {
          code: string | null
          created_at: string
          id: string
          metadata: Json | null
          name: string
          rate: number
          shipping_method_id: string
          updated_at: string
        }
        Insert: {
          code?: string | null
          created_at?: string
          id: string
          metadata?: Json | null
          name: string
          rate: number
          shipping_method_id: string
          updated_at?: string
        }
        Update: {
          code?: string | null
          created_at?: string
          id?: string
          metadata?: Json | null
          name?: string
          rate?: number
          shipping_method_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "FK_926ca9f29014af8091722dede08"
            columns: ["shipping_method_id"]
            isOneToOne: false
            referencedRelation: "shipping_method"
            referencedColumns: ["id"]
          }
        ]
      }
      shipping_option: {
        Row: {
          admin_only: boolean
          amount: number | null
          created_at: string
          data: Json
          deleted_at: string | null
          id: string
          is_return: boolean
          metadata: Json | null
          name: string
          price_type: Database["public"]["Enums"]["shipping_option_price_type_enum"]
          profile_id: string
          provider_id: string
          region_id: string
          updated_at: string
        }
        Insert: {
          admin_only?: boolean
          amount?: number | null
          created_at?: string
          data: Json
          deleted_at?: string | null
          id: string
          is_return?: boolean
          metadata?: Json | null
          name: string
          price_type: Database["public"]["Enums"]["shipping_option_price_type_enum"]
          profile_id: string
          provider_id: string
          region_id: string
          updated_at?: string
        }
        Update: {
          admin_only?: boolean
          amount?: number | null
          created_at?: string
          data?: Json
          deleted_at?: string | null
          id?: string
          is_return?: boolean
          metadata?: Json | null
          name?: string
          price_type?: Database["public"]["Enums"]["shipping_option_price_type_enum"]
          profile_id?: string
          provider_id?: string
          region_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "FK_5c58105f1752fca0f4ce69f4663"
            columns: ["region_id"]
            isOneToOne: false
            referencedRelation: "region"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "FK_a0e206bfaed3cb63c1860917347"
            columns: ["provider_id"]
            isOneToOne: false
            referencedRelation: "fulfillment_provider"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "FK_c951439af4c98bf2bd7fb8726cd"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "shipping_profile"
            referencedColumns: ["id"]
          }
        ]
      }
      shipping_option_requirement: {
        Row: {
          amount: number
          deleted_at: string | null
          id: string
          shipping_option_id: string
          type: Database["public"]["Enums"]["shipping_option_requirement_type_enum"]
        }
        Insert: {
          amount: number
          deleted_at?: string | null
          id: string
          shipping_option_id: string
          type: Database["public"]["Enums"]["shipping_option_requirement_type_enum"]
        }
        Update: {
          amount?: number
          deleted_at?: string | null
          id?: string
          shipping_option_id?: string
          type?: Database["public"]["Enums"]["shipping_option_requirement_type_enum"]
        }
        Relationships: [
          {
            foreignKeyName: "FK_012a62ba743e427b5ebe9dee18e"
            columns: ["shipping_option_id"]
            isOneToOne: false
            referencedRelation: "shipping_option"
            referencedColumns: ["id"]
          }
        ]
      }
      shipping_profile: {
        Row: {
          created_at: string
          deleted_at: string | null
          id: string
          metadata: Json | null
          name: string
          type: Database["public"]["Enums"]["shipping_profile_type_enum"]
          updated_at: string
        }
        Insert: {
          created_at?: string
          deleted_at?: string | null
          id: string
          metadata?: Json | null
          name: string
          type: Database["public"]["Enums"]["shipping_profile_type_enum"]
          updated_at?: string
        }
        Update: {
          created_at?: string
          deleted_at?: string | null
          id?: string
          metadata?: Json | null
          name?: string
          type?: Database["public"]["Enums"]["shipping_profile_type_enum"]
          updated_at?: string
        }
        Relationships: []
      }
      shipping_tax_rate: {
        Row: {
          created_at: string
          metadata: Json | null
          rate_id: string
          shipping_option_id: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          metadata?: Json | null
          rate_id: string
          shipping_option_id: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          metadata?: Json | null
          rate_id?: string
          shipping_option_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "FK_346e0016cf045b9980747747645"
            columns: ["rate_id"]
            isOneToOne: false
            referencedRelation: "tax_rate"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "FK_f672727ab020df6c50fb64c1a70"
            columns: ["shipping_option_id"]
            isOneToOne: false
            referencedRelation: "shipping_option"
            referencedColumns: ["id"]
          }
        ]
      }
      staged_job: {
        Row: {
          data: Json
          event_name: string
          id: string
          options: Json
        }
        Insert: {
          data: Json
          event_name: string
          id: string
          options?: Json
        }
        Update: {
          data?: Json
          event_name?: string
          id?: string
          options?: Json
        }
        Relationships: []
      }
      store: {
        Row: {
          created_at: string
          default_currency_code: string
          default_location_id: string | null
          default_sales_channel_id: string | null
          id: string
          invite_link_template: string | null
          metadata: Json | null
          name: string
          payment_link_template: string | null
          swap_link_template: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          default_currency_code?: string
          default_location_id?: string | null
          default_sales_channel_id?: string | null
          id: string
          invite_link_template?: string | null
          metadata?: Json | null
          name?: string
          payment_link_template?: string | null
          swap_link_template?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          default_currency_code?: string
          default_location_id?: string | null
          default_sales_channel_id?: string | null
          id?: string
          invite_link_template?: string | null
          metadata?: Json | null
          name?: string
          payment_link_template?: string | null
          swap_link_template?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "FK_55beebaa09e947cccca554af222"
            columns: ["default_currency_code"]
            isOneToOne: false
            referencedRelation: "currency"
            referencedColumns: ["code"]
          },
          {
            foreignKeyName: "FK_61b0f48cccbb5f41c750bac7286"
            columns: ["default_sales_channel_id"]
            isOneToOne: true
            referencedRelation: "sales_channel"
            referencedColumns: ["id"]
          }
        ]
      }
      store_currencies: {
        Row: {
          currency_code: string
          store_id: string
        }
        Insert: {
          currency_code: string
          store_id: string
        }
        Update: {
          currency_code?: string
          store_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "FK_82a6bbb0b527c20a0002ddcbd60"
            columns: ["currency_code"]
            isOneToOne: false
            referencedRelation: "currency"
            referencedColumns: ["code"]
          },
          {
            foreignKeyName: "FK_b4f4b63d1736689b7008980394c"
            columns: ["store_id"]
            isOneToOne: false
            referencedRelation: "store"
            referencedColumns: ["id"]
          }
        ]
      }
      swap: {
        Row: {
          allow_backorder: boolean
          canceled_at: string | null
          cart_id: string | null
          confirmed_at: string | null
          created_at: string
          deleted_at: string | null
          difference_due: number | null
          fulfillment_status: Database["public"]["Enums"]["swap_fulfillment_status_enum"]
          id: string
          idempotency_key: string | null
          metadata: Json | null
          no_notification: boolean | null
          order_id: string
          payment_status: Database["public"]["Enums"]["swap_payment_status_enum"]
          shipping_address_id: string | null
          updated_at: string
        }
        Insert: {
          allow_backorder?: boolean
          canceled_at?: string | null
          cart_id?: string | null
          confirmed_at?: string | null
          created_at?: string
          deleted_at?: string | null
          difference_due?: number | null
          fulfillment_status: Database["public"]["Enums"]["swap_fulfillment_status_enum"]
          id: string
          idempotency_key?: string | null
          metadata?: Json | null
          no_notification?: boolean | null
          order_id: string
          payment_status: Database["public"]["Enums"]["swap_payment_status_enum"]
          shipping_address_id?: string | null
          updated_at?: string
        }
        Update: {
          allow_backorder?: boolean
          canceled_at?: string | null
          cart_id?: string | null
          confirmed_at?: string | null
          created_at?: string
          deleted_at?: string | null
          difference_due?: number | null
          fulfillment_status?: Database["public"]["Enums"]["swap_fulfillment_status_enum"]
          id?: string
          idempotency_key?: string | null
          metadata?: Json | null
          no_notification?: boolean | null
          order_id?: string
          payment_status?: Database["public"]["Enums"]["swap_payment_status_enum"]
          shipping_address_id?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "FK_402e8182bc553e082f6380020b4"
            columns: ["cart_id"]
            isOneToOne: true
            referencedRelation: "cart"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "FK_52dd74e8c989aa5665ad2852b8b"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "order"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "FK_f5189d38b3d3bd496618bf54c57"
            columns: ["shipping_address_id"]
            isOneToOne: false
            referencedRelation: "address"
            referencedColumns: ["id"]
          }
        ]
      }
      tax_provider: {
        Row: {
          id: string
          is_installed: boolean
        }
        Insert: {
          id: string
          is_installed?: boolean
        }
        Update: {
          id?: string
          is_installed?: boolean
        }
        Relationships: []
      }
      tax_rate: {
        Row: {
          code: string | null
          created_at: string
          id: string
          metadata: Json | null
          name: string
          rate: number | null
          region_id: string
          updated_at: string
        }
        Insert: {
          code?: string | null
          created_at?: string
          id: string
          metadata?: Json | null
          name: string
          rate?: number | null
          region_id: string
          updated_at?: string
        }
        Update: {
          code?: string | null
          created_at?: string
          id?: string
          metadata?: Json | null
          name?: string
          rate?: number | null
          region_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "FK_b95a1e03b051993d208366cb960"
            columns: ["region_id"]
            isOneToOne: false
            referencedRelation: "region"
            referencedColumns: ["id"]
          }
        ]
      }
      tracking_link: {
        Row: {
          created_at: string
          deleted_at: string | null
          fulfillment_id: string
          id: string
          idempotency_key: string | null
          metadata: Json | null
          tracking_number: string
          updated_at: string
          url: string | null
        }
        Insert: {
          created_at?: string
          deleted_at?: string | null
          fulfillment_id: string
          id: string
          idempotency_key?: string | null
          metadata?: Json | null
          tracking_number: string
          updated_at?: string
          url?: string | null
        }
        Update: {
          created_at?: string
          deleted_at?: string | null
          fulfillment_id?: string
          id?: string
          idempotency_key?: string | null
          metadata?: Json | null
          tracking_number?: string
          updated_at?: string
          url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "FK_471e9e4c96e02ba209a307db32b"
            columns: ["fulfillment_id"]
            isOneToOne: false
            referencedRelation: "fulfillment"
            referencedColumns: ["id"]
          }
        ]
      }
      user: {
        Row: {
          api_token: string | null
          created_at: string
          deleted_at: string | null
          email: string
          first_name: string | null
          id: string
          last_name: string | null
          metadata: Json | null
          password_hash: string | null
          role: Database["public"]["Enums"]["user_role_enum"] | null
          updated_at: string
        }
        Insert: {
          api_token?: string | null
          created_at?: string
          deleted_at?: string | null
          email: string
          first_name?: string | null
          id: string
          last_name?: string | null
          metadata?: Json | null
          password_hash?: string | null
          role?: Database["public"]["Enums"]["user_role_enum"] | null
          updated_at?: string
        }
        Update: {
          api_token?: string | null
          created_at?: string
          deleted_at?: string | null
          email?: string
          first_name?: string | null
          id?: string
          last_name?: string | null
          metadata?: Json | null
          password_hash?: string | null
          role?: Database["public"]["Enums"]["user_role_enum"] | null
          updated_at?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      create_policy_for_all_tables: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      create_select_policy_for_all_tables: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      enable_rls_for_all_tables: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      gtrgm_compress: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      gtrgm_decompress: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      gtrgm_in: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      gtrgm_options: {
        Args: {
          "": unknown
        }
        Returns: undefined
      }
      gtrgm_out: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      set_limit: {
        Args: {
          "": number
        }
        Returns: number
      }
      show_limit: {
        Args: Record<PropertyKey, never>
        Returns: number
      }
      show_trgm: {
        Args: {
          "": string
        }
        Returns: unknown
      }
    }
    Enums: {
      cart_type_enum:
        | "default"
        | "swap"
        | "draft_order"
        | "payment_link"
        | "claim"
      claim_item_reason_enum:
        | "missing_item"
        | "wrong_item"
        | "production_failure"
        | "other"
      claim_order_fulfillment_status_enum:
        | "not_fulfilled"
        | "partially_fulfilled"
        | "fulfilled"
        | "partially_shipped"
        | "shipped"
        | "partially_returned"
        | "returned"
        | "canceled"
        | "requires_action"
      claim_order_payment_status_enum: "na" | "not_refunded" | "refunded"
      claim_order_type_enum: "refund" | "replace"
      discount_condition_operator_enum: "in" | "not_in"
      discount_condition_type_enum:
        | "products"
        | "product_types"
        | "product_collections"
        | "product_tags"
        | "customer_groups"
      discount_rule_allocation_enum: "total" | "item"
      discount_rule_type_enum: "fixed" | "percentage" | "free_shipping"
      draft_order_status_enum: "open" | "completed"
      invite_role_enum: "admin" | "member" | "developer"
      order_fulfillment_status_enum:
        | "not_fulfilled"
        | "partially_fulfilled"
        | "fulfilled"
        | "partially_shipped"
        | "shipped"
        | "partially_returned"
        | "returned"
        | "canceled"
        | "requires_action"
      order_item_change_type_enum: "item_add" | "item_remove" | "item_update"
      order_payment_status_enum:
        | "not_paid"
        | "awaiting"
        | "captured"
        | "partially_refunded"
        | "refunded"
        | "canceled"
        | "requires_action"
      order_status_enum:
        | "pending"
        | "completed"
        | "archived"
        | "canceled"
        | "requires_action"
      PAYMENT_COLLECTION_STATUS_ENUM:
        | "not_paid"
        | "awaiting"
        | "authorized"
        | "partially_authorized"
        | "canceled"
      PAYMENT_COLLECTION_TYPE_ENUM: "order_edit"
      payment_session_status_enum:
        | "authorized"
        | "pending"
        | "requires_more"
        | "error"
        | "canceled"
      price_list_status_enum: "active" | "draft"
      price_list_type_enum: "sale" | "override"
      product_status_enum: "draft" | "proposed" | "published" | "rejected"
      refund_reason_enum: "discount" | "return" | "swap" | "claim" | "other"
      return_status_enum:
        | "requested"
        | "received"
        | "requires_action"
        | "canceled"
      shipping_option_price_type_enum: "flat_rate" | "calculated"
      shipping_option_requirement_type_enum: "min_subtotal" | "max_subtotal"
      shipping_profile_type_enum: "default" | "gift_card" | "custom"
      swap_fulfillment_status_enum:
        | "not_fulfilled"
        | "fulfilled"
        | "shipped"
        | "partially_shipped"
        | "canceled"
        | "requires_action"
      swap_payment_status_enum:
        | "not_paid"
        | "awaiting"
        | "captured"
        | "confirmed"
        | "canceled"
        | "difference_refunded"
        | "partially_refunded"
        | "refunded"
        | "requires_action"
      user_role_enum: "admin" | "member" | "developer"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://sdqpvuwwssmrtokwotsb.supabase.co'
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNkcXB2dXd3c3NtcnRva3dvdHNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY5NDQzMDQsImV4cCI6MjAxMjUyMDMwNH0.G3ZtyLFHE2urKqVAbhE-s0GKaMOlVFElwE9Ykb1aubE'

export const supabase = createClient(supabaseUrl, supabaseKey)